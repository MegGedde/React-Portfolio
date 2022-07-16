import React from 'react';
import Navigation from '../Navigation';

function Header() {
    return (
        <header className="flex-row App-header"> 
            <h1>Megan Gedde</h1>    
            <nav className="flex">
                <Navigation />
            </nav> 
        </header>
    )
}

export default Header;