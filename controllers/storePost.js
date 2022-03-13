const path = require('path')
const BlogPost = require("../models/BlogPost")
const flash = require("connect-flash")
module.exports = (req, res)=>{
    let image = req.files.image;
    image.mv(path.resolve(__dirname,"..",'public/img',image.name),
        async (error)=>{
            await BlogPost.create({
                ...req.body,
                image: "/img" + image.name,
                userid: req.session.userId
            }, (error, user)=>{
                if(error){
                    const validationErrors=Object.keys(error.errors).map( key => error.errors[key].message)
                    req.flash("validationErrors", validationErrors)
                    req.flash("data", req.body)
                    res.redirect("/posts/new")
                }
            })
            res.redirect('/')
        })
}