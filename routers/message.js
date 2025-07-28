

const {Router} = require("express");

const new_message = Router();

new_message.get("/",(req,res)=>{

    res.render("form")
})



module.exports = new_message;
