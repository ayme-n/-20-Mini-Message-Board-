
require("dotenv").config();

const path = require("node:path");
const express = require("express");


const indexRouter = require("./routers/index")
const new_message = require("./routers/message")
const ErrorPage = require("./routers/Error")

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/",indexRouter)

app.use("/new",new_message)


app.use("/{*splat}",ErrorPage)


app.listen(process.env.PORT || 3000 , ()=>{
    console.log("Listening")
})
