const express = require("express")
const path = require("path")
const ejs = require("ejs")

const app = express()
app.set("view engine","ejs")
app.use(express.static("public"))
app.listen(3000, ()=>{
    console.log("app listening on port 3000")
})

/*app.get("/",(req, res)=>{
    res.sendFile(path.resolve(__dirname, "pages/index.html"))
})
app.get("/about",(req, res)=>{
    res.sendFile(path.resolve(__dirname, "pages/about.html"))
})
app.get("/contact",(req, res)=>{
    res.sendFile(path.resolve(__dirname, "pages/contact.html"))
})
app.get("/post",(req, res)=>{
    res.sendFile(path.resolve(__dirname, "pages/post.html"))
})*/
app.get("/",(req, res)=>{
    res.render("index")
})
app.get("/about",(req, res)=>{
    res.render("about")
})
app.get("/contact",(req, res)=>{
    res.render("contact")
})
app.get("/post",(req, res)=>{
    res.render("post")
})