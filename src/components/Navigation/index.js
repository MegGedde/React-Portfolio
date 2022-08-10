import React, { useEffect } from 'react';

function Navigation(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
      } = props;
      useEffect(() => {
        document.title = currentCategory.name;
      }, [currentCategory]);
    return (
            <ul className="navigation">
                {categories.map((category) => (
                <li
                className={`mx-1 ${
                  currentCategory.name === category.name && `navActive`
                  }`}
                key={category.name}
              >
               <span
                 onClick={() => {
                   setCurrentCategory(category);
                 }}
               >    {category.name}</span>
             </li>
                ))}
                {/* /* <li>Portfolio</li>
                <li>Contact Me</li>
                <li>Resume</li> */ }
            </ul>      
    )
}

export default Navigation;