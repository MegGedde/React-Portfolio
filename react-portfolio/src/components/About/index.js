import React from 'react';
import Profile from '../../assets/Profile.jpeg';


function About() {
    return (
        <div> 
            <h1>About Me</h1>   
            <div  className="profile">
             <img src={Profile} className="profPic" alt="profile" />
             <h4 className="bio">Junior Software Engineer leveraging professional Human Resources background to build programs and problem solve. Recently earned a certificate in full stack development from the University Coding through the University of Minnesota, with newly developed skills in JavaScript, CSS, Node.js, SQL, NoSQL, Express.js, React, RESTful API’s, ORM, MVC and responsive web design. Known as an innovative problem solver, my strong collaboration, communication, and attention to detail skills lead me to being passionate about the code being correct and having a purpose. With each project, my aim is to make the biggest impact on the user experience.  I look forward to leveraging my skills as part of a fast-paced, quality-driven team to build better experiences.</h4>
             </div>
        </div>
    )
}

export default About;
