import React from 'react';

function Project({ currentCategory }) {
    const { name, description } = currentCategory;
    return (
    <section className="flex">
        <h1 className="title">{name}</h1>
        <img className={`${name === "About Me" && `profPic`}`}
               key={'pic'}></img>
        <p className="bio">{description}</p>
        
      </section>
    );
}

export default Project;