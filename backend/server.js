import express from 'express'
import dotenv from 'dotenv'
import {connectDB} from './config/db.js'
import productRoutes from './routes/products.js'

dotenv.config()
const app=express()
app.use(express.json())

connectDB();


app.use("/api/products",productRoutes)


const PORT=process.env.PORT||5000

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}` )
})
