import React from 'react';

function Project() {
    const cardInfo = [
      {
        title: "Unleashed",
        site: "https://unleashed-pets-finder.herokuapp.com/",
        github: "https://github.com/MegGedde/Unleashed",
        tech: "Technologies Used: JavaScript / CSS / Handlebars / Express / Node / SQL ",
        image: require("../../assets/unleashed.jpg"),
        description: "Website created to connect users with others to try and find their lost pet, or if they were the ones to have found an “unleashed” animal, they can look to this site to contact their owner."
    },
    {
        title: "DEI Calendar",
        site: "https://serene-mesa-60189.herokuapp.com/",
        github: "https://github.com/petehodnefield/project-three",
        tech: "Technologies Used: Full MERN Stack (Mongoose, Express.js, React, Node.js)",
        image: require("../../assets/dei.jpg"),
        description: "DEI Calendar is a website created for employers to post for their employees to learn about upcoming cultural festivals and holidays to enable them to connect with each other to plan for celebrations."
    },
    {
        title: "SunFund",
        site: "https://meggedde.github.io/SunFund/",
        github: "https://github.com/MegGedde/SunFund",
        tech: "Technologies Used: HTML / CSS / JavaScript ",
        image: require("../../assets/sunbuddy.jpg"),
        description: "Website using API's to fetch data for weather and current currency exchange rate based on city searched."
    },
    {
        title: "Run Buddy",
        site: "https://meggedde.github.io/run-buddy/",
        github: "https://github.com/MegGedde/run-buddy",
        tech: "Technologies Used: HTML, CSS",
        image: require("../../assets/run-buddy.jpg"),
        description: "A website for a business that offers fitness training services. Includes description of services, contact information, location information, forms, and more."
    }]

   return (
    <div>
      <h1>Projects</h1>
          <div className="flexBox">
              {cardInfo.map((cardInfo) => (
                  <div className="card">
                    <h2 className="card-header">{cardInfo.title} </h2>
                    <a href={cardInfo.site}>
                        <img src={cardInfo.image} className="image" alt="webpage"/>
                    </a>
                    <div className="card-body">
                        <p >{cardInfo.text}</p>
                        <a href={cardInfo.github} className="github">
                            <p className="github">
                                Link to Github Code
                            </p>
                        </a>
                        <p>{cardInfo.tech}</p>
                        <p className="desc">{cardInfo.description}</p>
                    </div>
              </div>
              ))}
          </div>
      </div>
      );
  };


export default Project;