const mongoose = require('mongoose');
const BlogPost = require("./models/BlogPost");

mongoose.connect("mongodb://localhost/my_database")

BlogPost.create({
    title: "The Mythbuster’s Guide to Saving Money on Energy Bills",
    body : `If you have been here a long time, you might remember when I went on ITV Tonight to
    dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money
    topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery
    opens up. You know those bullet-point lists. You start spotting them everything at this time of year.
    They go like this:`
},(error, blogpost)=>{
    console.log(error, blogpost)
})

BlogPost.find({
    title:/The/
},(error, blogspot)=>{
    console.log(error, blogspot)
})
var id = "622756412f61ef4e0280f1c4"
BlogPost.findById(id, (error, blogspot)=>{
    console.log(error, blogspot)
})
BlogPost.findByIdAndUpdate(id,{title:"updated title"}, (error, blogspot)=>{
    console.log(error, blogspot)
})