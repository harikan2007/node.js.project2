module.exports = (req, res) =>{
    if(req.session.userId){
   return res.render("create")}
   else {
       return res.render("/auth/login")
   }
}