


const {Router} = require("express")

const ErrorPage = Router()

ErrorPage.get("/",(req,res)=>{
    res.send("Error page")
})

module.exports = ErrorPage;