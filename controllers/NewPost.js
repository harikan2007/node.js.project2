const flash = require("connect-flash")

module.exports = (req, res) =>{
    if(req.session.userId){
        var title = ""
        var body = ""
        var username = ""
        var datePosted = ""
        var image = ""
        const data = req.flash("data")[0];
        if (typeof data != "undefined"){
            title = data.title
            body = data.body
            username= data.username
            datePosted = data.datePosted
            image = data.image

        }
   return res.render("create", {
    createPost: true,
       errors: flash("validationerrors"),
       title: title,
       username: username,
       body: body,
       datePosted: datePosted,
       image: image
   })}
   else {
       return res.render("/auth/login")
   }
}