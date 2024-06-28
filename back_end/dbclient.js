
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Portfolio_Chamitha:chamitha123@cluster0.lovs4dv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const getClient = async ()=>{
    try{
        await client.connect();
        console.log("Connected to the Client");
        return client;

    }catch(err){
        console.log(err);
    }
}

module.exports = getClient;