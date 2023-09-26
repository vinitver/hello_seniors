import express from "express"
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import router from "./routes/posts.js";
import cors from "cors";
import cookieParser from "cookie-parser"
const app= express()


app.use(express.json());

app.use(cors())
app.use(cookieParser());
app.use("/server/auth", authRoutes);
app.use("/app/posts", postRoutes)
app.listen(8800,()=>{
    console.log("connected")
})