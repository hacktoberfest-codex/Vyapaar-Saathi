import React from 'react';
import './About.css';
import rafiImg from "../../assets/profile.png"
import samImg from '../../assets/member2.png'
import sohanImg from '../../assets/member3.jpg'
import pritamImg from '../../assets/member4.jpg'
import twImg from '../../assets/member5.jpg'
import sumImg from '../../assets/member6.jpeg'
const About = () => {
  const sdata=[
    {
        name:"Rafi Ahmed Khan",
        imgsrc:rafiImg,
        branch:"CSE",
        year:"3rd Year",
        role:"Full Stack Developer",
        link:"https://rafiahmedkhan.vercel.app/"
    },
    {
        name:"Sumit Saha ",
        imgsrc:sumImg,
        branch:"CSE",
        year:"3rd Year",
        role:" Front End developer",
        link:"#"
    },
    {
        name:"Pritam Kumar Sarangi",
        imgsrc:pritamImg,
        branch:"CSE",
        year:"3rd year",
        role:"Front End Developer",
        link:"#"
    },
    {
        name:"Sohan Mohanty ",
        imgsrc:sohanImg,
        branch:"CSIT",
        year:"3rd Year",
        role:"AI/ML Developer",
        link:"#"
    },
    {
        name:"Twinkle Kumari Sahoo ",
        imgsrc:twImg,
        branch:"CSE",
        year:"3rd Year",
        role:"Product Management",
        link:"#"
    },
    {
        name:"Sampann Kanungo",
        imgsrc:samImg,
        branch:"CSE",
        year:"3rd Year",
        role:"Front End Developer",
        link:"#"
    },
];
  return (
    <div className='about_main'>
      <p className='about_h1'>Our Team</p>
      <div className='about_cards'>
        {sdata.map((contributor, index) => (
          <div className='about_card' key={index}>
            <img src={contributor.imgsrc} alt='server_fault' className='about_cardimg' />
            <div className='about_info'>
              <h2 className='about_name'>{contributor.name}</h2>
              <h3 className='about_branch'>{contributor.branch}</h3>
              <h3 className='about_branch'>{contributor.year}</h3>
              
              <p className='about_role'>{contributor.role}</p>
              <a href={contributor.link}  target='_blank' rel='noopener noreferrer'>
                Know More
                <i></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;