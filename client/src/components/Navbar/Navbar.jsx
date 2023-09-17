import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";




function Navbar() {

  
  const navRef = useRef();
 
const showNavbar = () => {
    navRef.current.classList.toggle(
        "responsive_nav"
    );
};




return (
    <div className="nav-header">
 
        <nav className="nav-nav" ref={navRef}>
       
        <div className="nav-con">
        
            <a href="/">Home</a>
            <a href="/Market">Market</a>
            {/* <a href="/HelpAs">Helping Assistant</a> */}
            <a href="Marketmessage">Chat With Hawkers</a>
            <a href="/About">About Us</a>
            <div className="navbar_btndiv">
            <button className="nav_btn1"><a href="/signin">Login</a></button>
            <button className="nav_btn1"><a href="/Signup">Register</a></button>
            </div>
            </div>
            <button
                className="nav-btn nav-close-btn"
                onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button
            className="nav-btn"
            onClick={showNavbar}>
            <FaBars />
        </button>
    </div>
);
}
export default Navbar;