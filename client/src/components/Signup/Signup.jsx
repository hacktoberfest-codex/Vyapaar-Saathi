import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import "./Signup.css";


const indianStates = [
  "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];


const Signup = () => {

 
  const navigate=useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    options:'',
    work: '',
    state:"",
    city:"",
    pincode:"",
    profileImage:"",
    password: '',
    cpassword: '',
     // Initialize the checkbox state as false
  });

  let name,value;
  const handleChange=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
  }

  const PostData = async(e) => {
    e.preventDefault();
    const{name,email,phone,options,work,state,city,pincode,profileImage,password,cpassword}=user;

   try {
    const res=await fetch("/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,options,work,state,city,pincode,profileImage,password,cpassword
      })
    })
    const data = await res.json();
    if(res.status===422 ||!data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }else{
      window.alert("Registration Succesfull");
      console.log("Registration Succesfull");

      navigate("/signin");
    }
    
   } catch (error) {
    console.error('Error during registration:', error);
   }

    
  };
return (
<div className='sig_mainok'>
<div className='sig_writeok'>
<h1>Hello, Vyapaaris!</h1>
<p>Enter Your personal details and start journey with us</p>
</div>
<div className="sig_containerok">
<div className="sig_cardokok">
<div className="signuppageok">
<h1 className='sig_h1ok'>Registration Form</h1>

</div>
<form method='POST'>
<fieldset>
<p className='sig_qsnok'>You have allready an account?<a href='/signin'>Log in</a> </p>
<label htmlFor="name"
className='lebel_name'>Name</label>
<input type="text"
 name="name"
  className="sig_input-fieldok" 
  placeholder='name' 
  autoComplete='off'
  value={user.name} 
  onChange={handleChange} 
   required />
<label htmlFor="email"className='lebel_name'>Email</label>
<input type="email" name="email" className="sig_input-fieldok" placeholder='email' autoComplete='off' value={user.email} onChange={handleChange} required />
<label htmlFor="phone"className='lebel_name'>Phone No</label>
<input type="number" name="phone" className="sig_input-fieldok" placeholder='contact no' autoComplete='off' value={user.phone} onChange={handleChange} required />
<label htmlFor="options" className='lebel_nameok'>Choose an Option</label>
  <select
    name="options"
    className=" sig_opt"
    value={user.options}
    onChange={handleChange}
    required
  >
    <option value="">Select an option</option>
    <option value="hawkers">Hawkers</option>
    <option value="buyers">Buyers</option>
  </select>
<label htmlFor="work"className='lebel_name'>Work Category</label>
<input type="text" name="work" className="sig_input-fieldok" placeholder='Buyers type NA' autoComplete='off' value={user.work} onChange={handleChange} required />
<label htmlFor="state" className='lebel_name'>State</label>
<select
  name="state"
  className="sig_opt"
  value={user.state}
  onChange={handleChange}
  required
>
  <option value="state">Select a state</option>
  {indianStates.map((state) => (
    <option key={state} value={state}>
      {state}
    </option>
  ))}
</select>
  <label htmlFor="city" className='lebel_name'>City</label>
  <input
    type="text"
    name="city"
    className="sig_input-fieldok"
    placeholder='City'
    autoComplete='off'
    value={user.city}
    onChange={handleChange}
    required
  />
  <label htmlFor="pincode" className='lebel_name'>Pincode</label>
  <input
    type="text"
    name="pincode"
    className="sig_input-fieldok"
    placeholder='Pincode'
    autoComplete='off'
    value={user.pincode}
    onChange={handleChange}
    required
  />

  <label htmlFor="pasword"className='lebel_name'>Password</label>
  <input type="password" name="password" className="sig_input-fieldok"  pattern="[a-z0-5]{8,}" placeholder='Password' autoComplete='off' value={user.password} onChange={handleChange} required />

  <label htmlFor="cpassword"className='lebel_nameok'>Confirm Password</label>
  <input type="password" name="cpassword" className="sig_input-fieldok"  placeholder='confirm password' autoComplete='off' value={user.cpassword} onChange={handleChange} required />
</fieldset>


<div className='sig_btnok'>
<input type="submit" value="register" className="sig_submit-buttonok" onClick={PostData} />
</div>
</form>
</div>
</div>
</div>
)
}

export default Signup