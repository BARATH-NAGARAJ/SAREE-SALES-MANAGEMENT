import 'dotenv/config.js'
import mongoose from 'mongoose'
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import productRouter from "./routes/productRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"; 


const app = express()
const port = process.env.PORT || 4000


app.use(express.json())
app.use(cors())

connectDB();

app.use("/api/product",productRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order", orderRouter);

//app.use("api/user",cartRouter)
//app.use("/api/order",orderRouter)

app.get("/", (req, res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

