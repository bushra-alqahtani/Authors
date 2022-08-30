const mongoose = require("mongoose")

const AuthorSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
 
} , {timestamps: true});

const Author=mongoose.model("Product", AuthorSchema);
module.exports = Author;