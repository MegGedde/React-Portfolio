import React from 'react';

function Project() {
    const cardInfo = [
      {
          title: "Run Buddy",
          site: "https://meggedde.github.io/run-buddy/",
          github: "https://github.com/MegGedde/run-buddy",
          tech: "Technologies Used: HTML, CSS",
          image: require("../../assets/run-buddy.jpg")
      },
      {
          title: "SunFund",
          site: "https://meggedde.github.io/SunFund/",
          github: "https://github.com/MegGedde/SunFund",
          tech: "Technologies Used: HTML / CSS / JavaScript ",
          image: require("../../assets/sunbuddy.jpg")
      },
      {
        title: "Unleashed",
        site: "https://unleashed-pets-finder.herokuapp.com/",
        github: "https://github.com/MegGedde/Unleashed",
        tech: "Technologies Used: JavaScript / CSS / Handlebars / Express / Node / SQL ",
        image: require("../../assets/unleashed.jpg")
    },
    {
        title: "project 3",
        text: "Website designed for yuioyucompany called Run Buddy",
        site: "https://meggedde.githubuigody/",
        github: "https://github.comiouyude/run-buddy",
        tech: "Technologies Used: HTML, CSS"
    }]

   return (
    <div>
      <h1>Projects</h1>
      <h2>Here are just some of the coding projects I have worked on</h2>
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
                    </div>
              </div>
              ))}
          </div>
      </div>
      );
  };


export default Project;