
import React, { useState, useEffect } from 'react';
import hwimg from "../../assets/hwb_img.png"
import './Market.css';
import { FaStar } from 'react-icons/fa';

import haw1 from '../../assets/haw1.jpg'
import haw2 from '../../assets/haw2.jpg'
import haw3 from '../../assets/haw3.jpg'
import haw4 from '../../assets/haw4.jpg'
import haw5 from '../../assets/haw5.jpg'
import haw6 from '../../assets/haw6.jpg'
import haw7 from '../../assets/haw7.jpg'

function Market() {
  const [marketData, setMarketData] = useState([]);
  const [rating,setRating]=useState(null);
  const [hover,setHover]=useState(null);
   const [usermessage, setUserMessage] = useState({
    textMessage:'',
    email: '',
    phone: '',
     });

     const pictures=[haw1,haw2,haw3,haw4,haw5,haw6,haw7,hwimg];

     let name,value;
  const handleMessage=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUserMessage({...usermessage,[name]:value})
  }

  const submitMessage = async(e) => {
    e.preventDefault();
    const{textMessage,email,phone}=usermessage;

   try {
    const res=await fetch("/Market",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        textMessage,email,phone
      })
    })
    const data = await res.json();
    if(res.status===422 ||!data){
      window.alert("Wrong credention");
      console.log("Invalid Registration");
    }else{
      window.alert("Your request send");
     
      console.log("Registration Succesfull");

    
    }
    
   } catch (error) {
    console.error('Error during registration:', error);
   }

    
  };




  useEffect(() => {
    // Fetch data from your backend API here
    fetch('/Market')
      .then((response) => response.json())
      .then((data) => {
        setMarketData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);



  return (
    <div className="market_main">
      <div className="cards-container">
        {marketData.map((item, index) => (
          <div className="card" key={index}>
            <div className='card_body'>
              <div className='market_img'>
            

                <img src={pictures[index]} alt="server_fault"/><br></br>
         
                {[...Array(5)].map((star,i)=>{
                  const currentRating=i+1;
                  return (
                    <label>
                      <input type='radio'
                      name='rating'
                      value={currentRating}
                      onClick={()=>setRating(currentRating)} />
                      <FaStar
                       className='star'
                        size={25}
                        color={currentRating<=(hover||rating)?"#ffc107":"#e4e5e9"}
                        onMouseEnter={()=>setHover(currentRating)}
                        onMouseLeave={()=>setHover(null)} />
                    </label>
                  )
                })}
              </div>
              <div className='carditems'>
                <p><span className='dec'>Name: </span><span className='text_span'>&nbsp;{item.name}</span></p>
                <p><span className='dec'>WorkCategory: </span><span className='text_span1'>{item.work}</span></p>
                <p><span className='dec'>Contact No: </span><span className='text_span1'>{item.phone}</span></p>
                <p><span className='dec'>Address: </span><span className='text_span1'>{item.state},{item.city},{item.pincode}</span></p>
          
                <p><span className='dec'>Time: </span><span className='text_span'>10AM-6PM</span></p>
            <input type='text' name='textMessage' placeholder='Add Instruction' className='input-box'  onChange={handleMessage}/>
            <input type='email' name='email 'placeholder='Enter email' className='input-box'  onChange={handleMessage} />
            <input type='phone' name='phone' placeholder='Enter contact no' className='input-box'   onChange={handleMessage }/>
            <button className="submit-button" onClick={submitMessage}>
              Submit
            </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Market;




