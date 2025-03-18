import express from 'express'

const app = express()
const port = 3000;


console.log('hi')

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})