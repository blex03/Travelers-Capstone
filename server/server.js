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

app.get('/api/search', async (req, res) => {
    const query = req.query.q || '';

    try {
        const client = await MongoClient.connect(url);
        const db = client.db(db_name);
        const collection = db.collection('Products');

        const filteredProducts = await collection.find({
            name: { $regex: query, $options: 'i' }
        }).toArray();

        res.json(filteredProducts);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't search for products");
    }
});

app.get('/api/:categoryType', async (req, res) => {
    try {
        const categoryType = req.params.categoryType
        const client = await MongoClient.connect(url);
        const db = client.db(db_name);
        const collection = db.collection('Products');
        const productsByCategory = await collection.find({ category: categoryType }).toArray()
        res.json(productsByCategory)
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Couldn't search for products");
    }
})

app.get('/api/cart/:username', async (req, res) => {
    try {
        const cartArray = []
        const username = req.params.username
        const client = await MongoClient.connect(url);
        const db = client.db(db_name)
        const collection = db.collection('Users');
        const user = await collection.findOne({ username })
        const cart = user.shopping_cart

        const productCollection = db.collection('Products')
        for (const productId of cart) {
            let product = await productCollection.findOne({ _id: new ObjectId(productId) })
            cartArray.push(product)
        }

        res.send(cartArray)
    } catch (error) {
        console.error(error)
        res.status(500).send("Couldn't get products from user")
    }

})

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body)

    console.log(username)

    try {
        const client = await MongoClient.connect(url)
        const database = client.db(db_name);
        const collection = database.collection('Users');

        const user = await collection.findOne({ username });
        console.log(user)

        if (user) {
            res.send(user)
        } else {
            res.status(404).send("User doesn't exist");
        }
    } catch (error) {
        console.error('Error querying the database:', error);
        res.status(500).send('Internal server error');
    }
});

app.post('/api/update-cart', async (req, res) => {
    const { username, shopping_cart } = req.body; // Match the JSON property name

    const client = await MongoClient.connect(url);
    const database = client.db(db_name);
    const collection = database.collection('Users');
    try {
        const user = await collection.findOneAndUpdate(
            { username: username },
            { $push: { shopping_cart: { $each: shopping_cart } } }, 
            { returnDocument: 'after' }
        );

        if (!user.username) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'Shopping cart updated successfully', user: user.value });
    } catch (error) {
        console.error('Error updating shopping cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.delete('/api/items/:user/:id', async (req, res) => {
    const { user, id } = req.params

    const client = await MongoClient.connect(url)
    const db = client.db(db_name)
    const collection = db.collection('Users')
    let userData = await collection.findOne({ username: user })

    const newCart = userData.shopping_cart
    const index = newCart.indexOf(id)
    if (index > -1) {
        newCart.splice(index, 1)
    }

    const response = await collection.updateOne({ _id: userData._id}, { $set: {shopping_cart: newCart}})

    console.log(newCart)
    res.send(response)


})



app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})

