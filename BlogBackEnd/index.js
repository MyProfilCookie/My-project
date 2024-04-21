const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
require('dotenv').config()
console.log(process.env.DB_USER)

// middleware
app.use(cors())
app.use(express.json())

// ayivorvirginie26
// wKWrXh7j14xwoID3

// mongodb connection

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@myblog.5qztkw7.mongodb.net/?retryWrites=true&w=majority&appName=myblog`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
   
    await client.connect();
    
    // database & collection
    const recettesCollection = client.db("myblog").collection("recettes");
    const blogCollection = client.db("myblog").collection("blog");

    // get data
    app.get('/recettes', async (req, res) => {
      const result = await recettesCollection.find({}).toArray();
      res.send(result)
    })
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
  
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})