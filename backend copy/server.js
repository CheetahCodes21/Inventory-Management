const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express()
app.use(express.json());
app.use(cors());

// Database Connection:---
mongoose.set("strictQuery",false);
mongoose.connect("mongodb+srv://Anudeep:Anudeep2003@cluster0.c232uy0.mongodb.net/weather")
.then(()=>{
    console.log("MongoDb is Connected...");
})
.catch(()=>{
    console.log("Error");
})

//Insert data to database

app.post("/insert",(req,res)=>{
    const data = req.body.data;

    let conn = mongoose.connection;
    conn.collection("InventoryMS").insertOne(data,(err)=>{
        if(err){
            console.log("Error");
        }else{
            console.log("Inserted successfully");
            res.status(200).send("Success");
        }
    });
});

//to get the data from the database
app.get('/IMS', (req, res) => {
    let conn = mongoose.connection;
    conn.collection('InventoryMS').find({}).toArray((err, data) => {
      if (err) {
        console.log('Error');
      } else {
        res.status(200).json(data);
      }
    });
  });

  //update the database 
  app.put('/IMS/:id', (req, res) => {
    let conn = mongoose.connection;
    const studentId = req.params.id;
    const newData = req.body.data;
    conn.collection('InventoryMS').updateOne(
      { _id: studentId },
      { $set: newData },
      (err, data) => {
        if (err) {
          console.log('Error');
        } else {
          res.status(200).send('Updated successfully');
        }
      }
    );
  });

  //deleting from the databse
  app.delete('/IMS/:id', (req, res) => {
    let conn = mongoose.connection;
    const studentId = req.params.id;
    conn.collection('InventoryMS').deleteOne(
      { _id: studentId },
      (err, data) => {
        if (err) {
          console.log('Error');
        } else {
          res.status(200).send('Deleted successfully');
        }
      }
    );
  });
  
  
// Server connection
app.listen(3100,()=>{
    console.log("Server is connected at Port 3100");
});

