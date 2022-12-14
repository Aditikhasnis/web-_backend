const express=require("express");
const app=express()
const mongoose=require("mongoose")
const dotenv=require('dotenv')
const routeUrls=require("./route/routes")
const cors=require('cors')
dotenv.config()
mongoose.connect(process.env.data_base_acess,()=>console.log("Data base connected "))


app.use(express.json())
app.use(cors())
app.use('/app',routeUrls)
app.listen(4000,()=>console.log("server is up and running"))
