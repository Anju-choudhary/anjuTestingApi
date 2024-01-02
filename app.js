require('dotenv').config();
const express = require('express');
const app = express();
const products_routes = require('./routes/product')
const PORT = process.env.PORT || 5000;
const connectDB = require('./db/conn')

app.get('/', (req, res) =>{
    res.send("hello, i am live")
})

//middleware or to set router
app.use('/api/products', products_routes)
const start = async () => {
    try{
        await connectDB(process.env.MONGO_DB)
        app.listen(PORT, () => {
           console.log(`connected to the port ${PORT}`)
        })
    }catch(error){
        console.log(error)
    }
}
start();