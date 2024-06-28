const express = require('express');
const cors = require('cors');
const getClient = require('./dbclient.js');
const { ObjectId } = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());



app.get("/",async (req,res)=>{
    const client = await getClient();
    res.send({"Message":"hello"});
})

app.get("/createDB",async (req,res)=>{
    const client = await getClient();
    const db = client.db("EWasteMart");
    const collection = db.collection("userCollection");
    const resp = await collection.insertOne({UserId:1, Username:"Chamitha",Password:"1234"});
    if(resp.insertedId){
        console.log(resp.insertedId);
        res.send({"ID":resp.insertedId});
    }else{
        console.log("err");
        res.send({"Message":"Nothing"});
    }
})
const PORT= 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
