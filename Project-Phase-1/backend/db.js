const mongoose = require("mongoose");

//Replace this line with your mongoDB Connection URL
mongoose.connect("YOUR_MONGODB_CONNECTION_URL/Gumroad")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    }
});

const productSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },  
    products :[{
        productName : {
            type: String,
            required: true,
            trim: true,
            maxLength: 100
        },
        productDescription : {
            type: String,
            required: true,
            maxLength: 500
        },
        productThumbnail : {
            type: String,
            required: true,
            maxLength: 500
        },
        productFile : {
            type: String,
            required: true,
            maxLength: 500
        },
        sales : {
            type: Number,
            required: true,
            default: 0
        },
        revenue : {
            type: Number,
            required: true,
            default: 0
        },
        price : {
            type: Number,
            required: true,
            default: 0
        },
        published : {
            type: Boolean,
            required: true,
            default: false
        }
    }]
});

const User = new mongoose.model("User",userSchema);
const Product = new mongoose.model("Product",productSchema);

module.exports  = {
    User,
    Product
};

