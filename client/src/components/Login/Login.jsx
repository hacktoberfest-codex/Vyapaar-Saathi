import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import "./Login.css"

const Login = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPasswod]=useState('');
 

  const loginUser=async(e)=>{
    e.preventDefault();

    try {

      const res=await fetch("/signin",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,password
        })
      });
      const data= res.json();
      if(res.status===401||!data){
        window.alert("Invalid Credential")
      }else{
        window.alert("Login Succesful")
       
       
       

          navigate("/Market");
       
      }
      
    } catch (error) {
      console.error('Error during login:', error);
    }

   
  }

  
 
return (
<div className='sig_main1'>
<div className='sig_write'>
<h1>Vyapaar Saathi Welcomes You!</h1>
<p>To keep connected with us please login with your personal info</p>
</div>
<div className="sig_container">
<div className="sig_card1">
<div className="signuppage">
<h1 className='sig_h1'>Login Form</h1>

</div>
<form method='POST'>
<fieldset>
<p className='sig_qsn'>You don't have an account yet?<a href="/Signup">create account</a> </p>
<label className='lebel_name' htmlFor="email">Email</label>
<input type="email" name="email" className="sig_input-field1"
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
 placeholder='email id' required />


  <label  className='lebel_name' htmlFor="password">Password</label>
  <input type="text" name="password" className="sig_input-field1"
  value={password}
  onChange={(e)=>setPasswod(e.target.value)}
   placeholder='password' required />
</fieldset>
<div className='sig_btn'>
<input type="submit" value="Log In"
onClick={loginUser} 
className="sig_submit-button"
 />
</div>
</form>
</div>
</div>
</div>
)
}

export default Login;