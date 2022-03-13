const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: [true,"please provide a title"],
    },
    body: {
        type: String,
        required: [true,"please enter the main message"],
    },
    username: {
        type: String,
        required: [true,"please enter the username"],
    },
    datePosted:{
        type: Date,
        default : new Date()
    },
    image: String
});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);
module.exports = BlogPost
