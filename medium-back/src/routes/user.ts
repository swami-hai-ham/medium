import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { sigininInput, signupInput } from "@swamihaihum/medium-common";

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();

userRouter.post('/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	// console.log(body);
	const {success} = signupInput.safeParse(body);
	// console.log(success);
	if(!success){
		return c.json({
			"message": "Input not correct"
		})
	}

	try {

		const alduser = await prisma.user.findFirst({
			where:{
				email:body.username,
				password: body.password
			}
		})
		if(alduser){
			return c.json({
				"message": "user already exists"
			})
		}
		const user = await prisma.user.create({
			data: {
				email: body.username,
				password: body.password,
				name: body.name
			}
		});
		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt });
	} catch(e) {
		c.status(403);
		return c.json({ error: e, body});
	}
})


userRouter.post('/signin', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const {success} = sigininInput.safeParse(body);
	// console.log(success);
	if(!success){
		return c.json({
			"message": "Input not correct"
		})
	}

	const user = await prisma.user.findUnique({
		where: {
			email: body.username,
			password: body.password
		}
	});

	if (!user) {
		c.status(403);
		return c.json({ error: "user not found" });
	}

	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });
})
