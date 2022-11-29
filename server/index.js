import  express  from "express";
import mongoose from "mongoose";
import  dotenv  from "dotenv";
import  cors  from "cors";
import connectDB from "./config/connectDB.js";
import userRouter from "./router/userRouter.js"

dotenv.config()

const app = express()

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

const port = process.env.PORT || 6000
const CONNECT_DB = process.env.DATABASE_URL
const DATABASE_URL = process.env.DATABASE_URL


connectDB(DATABASE_URL)

app.use("/api/user", userRouter)

app.on('listening', () =>{
    console.log("ok, server is running")
})


app.listen( port, () => {console.log(`server is running on port ${port}`)})

