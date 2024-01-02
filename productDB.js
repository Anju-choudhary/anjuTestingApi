require('dotenv').config();
const connectDB = require('./db/conn');
const Product = require('./model/product');
const ProductJson = require('./product.json')

const start = async () => {
try{
    await connectDB(process.env.MONGO_DB);
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("success")

}catch(error){
    console.log(error)
}
}
start();