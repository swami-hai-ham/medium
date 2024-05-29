import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';


const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();


app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);



export default app


// postgresql://swami-hai-ham:ZPn3HIX0KkuO@ep-proud-union-a57z6yar.us-east-2.aws.neon.tech/KarmaAI?sslmode=require

// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNWJhYmU4YTEtMWVjMC00YmMzLWFiNDItMGY3M2M1ZTBkZWQyIiwidGVuYW50X2lkIjoiMGUzZTM2YmRmNjBhZTdmY2VlODI3NWM5Yjk3MGY4YWI0ZjQ2N2JkMmI1ZGQxMzNmYTljNTYwNWViOGRlMTMzZiIsImludGVybmFsX3NlY3JldCI6IjhkMDUyZWFiLWU3NDQtNDM0OS1hMzI2LTQ1YWRhMjY5ZjNjNCJ9.0qayKyOkuabXXAiEtRksCYlF4vY2n2fIsCW8362mS7g"