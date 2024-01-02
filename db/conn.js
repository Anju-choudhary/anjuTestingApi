const mongoose = require("mongoose");

//connection creation and creating a new db
//uri:"mongodb+srv://Anju:sPpTF5bqQNH3AURC@cluster0.4dcgpdl.mongodb.net/",  mongodb://localhost:27017/products-api
const connectDB = (uri,) =>{
  return mongoose
  .connect(uri)
  .then(() => console.log("connection succesfull"))
  .catch((err) => console.log(err));
}


module.exports = connectDB;
 