import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
      } = props;
    return (
        <header className="flex-row App-header"> 
            <h1>Megan Gedde</h1>    
            <nav className="flex">
                <Navigation currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} categories={categories}/>
            </nav> 
        </header>
    )
}

export default Header;