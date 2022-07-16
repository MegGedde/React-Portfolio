import React from 'react';



function Navigation() {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
      } = props;
    return (
            <ul className="navigation">
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Contact Me</li>
                <li>Resume</li>
            </ul>      
    )
}

export default Navigation;