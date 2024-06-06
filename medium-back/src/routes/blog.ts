import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@swamihaihum/medium-common";
import { Hono } from "hono";
import { decode, verify } from "hono/jwt";


export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	},
    Variables:{
        userId: string;
    }
}>();

blogRouter.use("/*",async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    const user = await verify(authHeader.split(" ")[1], c.env.JWT_SECRET);

    if(user){
        c.set("userId", String(user.id));
        await next();
    }else{
        c.status(403);
        return c.json({
            message: "You are not logged in"
        })
    }
})

blogRouter.post('/',async (c) => {
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
    const authorId = c.get("userId")

	const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body);
	// console.log(success);
	if(!success){
		return c.json({
			"message": "Input not correct"
		})
	}

    try{
        const blog = await prisma.post.create({
            data: {
                title:body.title,
                content: body.content,
                authorId: authorId
            }
        })

        return c.json({
            id: blog.id
        })
    }catch(e){
        return c.json({
            error: e
        })
    }
})
  
blogRouter.put('/',async (c) => {

    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
    const {success} = updateBlogInput.safeParse(body);
	// console.log(success);
	if(!success){
		return c.json({
			"message": "Input not correct"
		})
	}

    try{
        const blog = await prisma.post.update({
            where:{
                id: body.id
            },
            data: {
                title:body.title,
                content: body.content,
            }
        })

        return c.json({
            id: blog.id
        })
    }catch(e){
        return c.json({
            error: e
        })
    }
})

blogRouter.get('/bulk',async (c) => {
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    const blogs = await prisma.post.findMany();
    return c.json({blogs})
})
  
blogRouter.get('/:id',async (c) => {
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    const id = c.req.param("id");
    try{
        const blog = await prisma.post.findFirst({
            where:{
                id: id
            }
        })

        return c.json({
            blog
        })
    }catch(e){
        return c.json({
            error: e
        })
    }
})
  

