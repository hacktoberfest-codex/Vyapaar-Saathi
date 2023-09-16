const mongoose=require("mongoose");


const DB=process.env.MONGODB_URL;



mongoose.connect(DB).then(()=>{
    console.log("server connected to the data base")
}).catch((error)=>{
    console.log(error);
})