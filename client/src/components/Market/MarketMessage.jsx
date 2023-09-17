import React,{ useState, useEffect }  from 'react'
import "./Market.css"
const MarketMessage = () => {
   
    const [userMessage, setUserMessage] = useState([]);

    useEffect(() => {
      // Fetch data from your backend API here
      fetch('/MarketMessage')
        .then((response) => response.json())
        .then((data) => {
            setUserMessage(data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

  return (
    <>   <div className='marketMessage_body'>

<div className="market_heading">
    <h1>YOUR MESSAGES</h1>
            </div>
        {userMessage.map((item, index) => (
          <div className="card_marketmessage"  key={index}>
             
              <div className='marketmessageitems'>

              <p className='p1'><span style={{fontWeight:"900"}}>Email : </span><span>{item.email}</span></p>
             <p className='p2'> <span style={{fontWeight:"900"}}>Order: </span><span>{item.textMessage}</span></p>
             <p className='p3'><span style={{fontWeight:"900"}}>Contact no : </span><span>{item.phone}</span></p>
            
            
              <div  >
            </div>
              </div>
            </div>
        
        ))}

    </div>
    
    </>
  )
}

export default MarketMessage