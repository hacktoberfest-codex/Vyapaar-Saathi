const express=require("express");
const router=express.Router();
const bcrypt =require("bcryptjs");
const jwt=require("jsonwebtoken");
require('../db/conn');
const User=require('../models/userSchema');
const TextM =require('../models/textSchema');




router.get("/",(req,res)=>{
    res.send("ni")
})



router.post("/signup",async(req,res)=>{
    const {name,email,phone,options,work,state,city,pincode,password,cpassword}=req.body;
if(!name||!email||!phone||!options||!work||!state||!city||!pincode||!password||!cpassword){
    return res.status(422).json({error:"fill the details properly"})
}

try {

   const userExist= await User.findOne({email:email})
    
        if(userExist){
            return res.status(422).json({error:"Email id already exist"}) 
        }else if(password!=cpassword){
            return res.status(422).json({error:"Password are not matching"})
        }else{

            const user=new User({name,email,phone,options,work,state,city,pincode,password,cpassword});

            await  user.save();
            
            res.status(201).json({mssg:"details saved succesfully"})

        }

       
      
        
  } catch (error) {
    console.log(error);
}
})


router.post("/signin",async(req,res)=>{
     try {
        let token;
        const {email,password}=req.body;
     
        if(!email||!password){
            res.status(401).json({mssg:"wrong credentiol"})
        }

        const userCheck=await User.findOne({email:email});
        if(userCheck){

            const isCheck=await bcrypt.compare(password,userCheck.password);

          token= await userCheck.generateAuthToken();
            console.log(token);

           


            if(isCheck){
                res.status(201).json({mssg:"Login succesful"});
                res.cookie("jwtoken",token,{
                    expires:new Date(Date.now()+25892000000),
                    httpOnly:true
    
                })
            }else{
                res.status(401).json({mssg:"wrong credencials"});
            }

        }else{
            res.status(401).json({mssg:"wrong credencials"});
        }
       
        
    } catch (error) {
        console.log(error);
    }

   

    
});

router.get('/Market',async(req,res)=>{
    
    try {
        const users = await User.find({options:'hawkers'}); 
    
       
        res.json(users);
      } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Server error' });
      } 
})


router.post("/Market",async(req,res)=>{
    const {textMessage,email,phone}=req.body;
if(!textMessage||!email||!phone){
    return res.status(422).json({error:"fill the details properly"})
}

try {

   const userExist= await User.findOne({email:email})

      if(userExist){
        const text=new TextM({textMessage,email,phone});
        await text.save();
        res.status(201).json({mssg:"details saved succesfully"})
      }else{
        return res.status(422).json({error:"Email does not exist"}) 
      }
    } catch (error) {
    console.log(error);
}
})

router.get('/MarketMessage',async(req,res)=>{
    
    try {
     
    
        const text = await TextM.find();
    
     
        res.json(text);
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Server error' });
      }
})


// router.get('/profile', authenticateUser, async (req, res) => {
//     try {
     
//       const user = req.user;
  
//       const userData = await User.findById(user.id);
//    console.log(user);
     
//       res.json(userData);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   });
   

module.exports=router;