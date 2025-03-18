import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import cors from 'cors';



const app = express();
const port = 3000;
const db_name = 'shopping';
const url = 'mongodb://localhost:27017';

app.use(cors());
app.use(express.json());
app.use(express.static('./public'))

app.get('/api/products', async (req, res) => {
    try {
        const client = await MongoClient.connect(url)
        const db = client.db(db_name)
        const collection = db.collection('Products')
        const products = await collection.find({}).toArray();
        res.json(products);
    } catch (err) {
        console.error("Error:", err)
        res.status(500).send("couldn't get items");
    }
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})