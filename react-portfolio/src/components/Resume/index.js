import React from 'react';

function Resume() {
return (
    <div>
      <h1>Skills</h1>
        <h2> Technical Skills </h2>
        <ul>
            <li>Frontend: HTML5, CSS3, JQuery, Javascript, React, Bootstrap, Bulma </li>
            <li>Backend:  MySQL, NoSQL, Express.js, React, Node.js, Handlebars, RESTful API’s, MongoDB, mongoose</li>
            <li>Other: Git, Github, Heroku, ORM, MVC, Insomnia, DevTools, Lighthouse, PWA, webpack(build tools), GraphQL</li>
        </ul>
        <h2> Non-Technical Skills </h2>
        <ul>
            <li>Adaptability, collaboration, data analysis, independent, motivated, organized, go-getter</li>
            <li>Passionate, problem solver, project management, quality assurance and excellent oral and written communication
</li>
        </ul>

        <h1> Education </h1>
        <ol>
            <li>University of Minnesota</li>
            <ul>
            <li>Certificate Full Stack Developer</li>
            <li>August 2022</li>
            </ul>
          
            <li>University of Minnesota, Duluth</li>
            <ul>
            <li>Bachelor of Business Administration, Healthcare Management Major, Psychology Minor</li>
            <li>Graduated Magna Cum Laude</li>
            <li>December 2015</li>
            </ul>
        </ol>
    </div>
    
)
}

export default Resume;
