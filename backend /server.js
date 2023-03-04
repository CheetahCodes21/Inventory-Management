const express = require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

//Database 
mongoose.set("strictQuery",false);
mongoose.connect("mongodb+srv://Chethan:schoolsrs@cluster0.b6zvpdo.mongodb.net/B_SiteP")
.then(()=>{
    console.log("Mongo DB is connected...");
})
.catch(()=>{
    console.log("Error...");
})

//insert data to database
app.post("/insert",(req,res)=>{
    const data = req.body.data;

    let conn = mongoose.connection;
    conn.collection("blog_data").insertOne(data,(err)=>{
        if(err){
            console.log("Error");
        }else{
            console.log("Inserted successfully");
            res.status(200).send("Success");
        }
    });
});

//Server Connection -----
app.listen(3100,()=>{
    console.log("Server is Connected at port 3100");
})

//Test api---
app.get("/",(req,res)=>{
    res.send("Hello From Server 😒😒")
})