require('dotenv').config();
const express =require("express");
const app=express();
 
require("./db/conn");
app.use(express.json());
app.use(require("./router/auth"));

const PORT=process.env.PORT;





app.get("/",(req,res)=>{
    res.send("niwwmxwim")
})
//Rafihawkers2003
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
});