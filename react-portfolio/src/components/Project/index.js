import React from 'react';

function Project() {
    const cardInfo = [
      {
          title: "Run Buddy",
          text: "Website designed for fitness company called Run Buddy",
          site: "https://meggedde.github.io/run-buddy/",
          github: "https://github.com/MegGedde/run-buddy",
          tech: "Technologies Used: HTML, CSS",
          image: require("../../assets/run-buddy.jpg")
      },
      {
          title: "Run Buddy",
          text: "Website designed for fitness company called Run Buddy",
          site: "https://meggedde.github.io/run-buddy/",
          github: "https://github.com/MegGedde/run-buddy",
          tech: "Technologies Used: HTML, CSS"
      }]

   return (
    <div>
      <h1>Projects</h1>
      <h2>Here are just some of the coding projects I have worked on</h2>
          <div className="flexBox">
              {cardInfo.map((cardInfo) => (
                  <div className="card">
              <a href={cardInfo.site} className="card">
                  <img src={cardInfo.image} className="image" alt="picture"/>
              <h2 className="card-header">{cardInfo.title} </h2>
              <div className="card-body">
              <p >{cardInfo.text}</p>
              <a href={cardInfo.github}>
                  <p>
                      Link to Code
                  </p>
              </a>
              <p>{cardInfo.tech}</p>
              </div>
              </a>
              </div>
              ))}
          </div>
      </div>
      );
  };


export default Project;