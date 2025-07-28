


const {Router} = require("express")

const indexRouter = Router()




const messages = [
  {
    id : 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id : 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

let id = 2;



indexRouter.get("/",(req,res)=>{
    res.render("index",{ title : "Mini  MessageBoard" , messages : messages})
})


   
indexRouter.post("/new",(req,res)=>{

    messages.push({id : id++ , text : req.body.text , user : req.body.user})

    res.redirect("/")
}
)

indexRouter.get("/details/:id",(req,res)=>{

    res.render("details",{messages : messages , id : parseInt(req.params.id)})
})




module.exports = indexRouter;