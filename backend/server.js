const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const cookieParser=require("cookie-parser")


const Todoroutes=require('./routes/todo.routes.js')
const Userroutes=require('./routes/user.routes.js')
require("dotenv").config()

const app=express()
app.use(cookieParser())
const PORT=process.env.PORT || 5000

app.use(express.json())
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))


mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("MongoDb connected")
})
.catch((err)=>{
    console.log("MONGODB Connection failed:",err);
})

app.use(Todoroutes)
app.use(Userroutes)


app.listen(PORT,()=>{
    console.log(`Server listening at PORT :${PORT}`)
    console.log();
})