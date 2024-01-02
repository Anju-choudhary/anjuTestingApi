const mongoose = require('mongoose');
// const validator = require('validator');

const productScehma = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        required:[true, "price must be provided"]
    },
    featured:{
        type:Boolean,
        default: true
    },
    rating:{
        type:Number,
        default: 4.9
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    company:{
        type:String,
        enum: {
            values:['apple', 'samsung','dell', 'mi'],
            message:`{VALUE} is not supported`
        }
    }


})


// we will create a new collection

//const Product = new mongoose.model('Product', productScehma);

module.exports = mongoose.model("Product", productScehma)