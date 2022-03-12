global.loggedIn = null;
const express = require("express")
const ejs = require("ejs")
const mongoose = require("mongoose");
const bodyparser = require("body-parser")
const fileUpload = require("express-fileupload")
const newPostController = require("./controllers/NewPost")
const aboutController = require("./controllers/About")
const contactController = require("./controllers/Contact")
const samplePageController = require("./controllers/SamplePage")
const homeController = require("./controllers/home")
const getPostController = require("./controllers/getPost")
const storePostController = require("./controllers/storePost")
const middlewarevalidation = require("./middleware/validation")
const newUserController = require("./controllers/newUser")
const storeUserController = require("./controllers/storeUser")
const loginController = require ("./controllers/login")
const loginUserController = require("./controllers/loginUser")
const sessionMiddleware = require("./middleware/session")
const authmiddleware = require("./middleware/authMiddleware");
const authMiddleware = require("./middleware/authMiddleware");
const redirectIfAuthenticatedMiddleware = require("./middleware/redirectIfAuthenticatedMiddleware")
const logoutController = require("./controllers/logout")
mongoose.connect("mongodb://localhost/my_database", {useNewUrlParser:true})
const app = express()
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(fileUpload())
app.use("posts/store",middlewarevalidation)
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(sessionMiddleware)
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
    });
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

app.get("/", homeController)
app.get("/auth/logout", logoutController)
app.get("/auth/register", redirectIfAuthenticatedMiddleware, newUserController)
app.get("/auth/login", redirectIfAuthenticatedMiddleware ,loginController)
app.get("/about", aboutController)
app.get("/contact", contactController)
app.get("/post",samplePageController)
app.get("/post/:id", getPostController)
app.get("/posts/new", authmiddleware ,newPostController)
app.post("/posts/store", authmiddleware, storePostController)
app.post("/users/login", redirectIfAuthenticatedMiddleware, loginUserController)
app.post("/users/store", redirectIfAuthenticatedMiddleware, storeUserController)
app.use((req, res)=> res.render("notfound"));