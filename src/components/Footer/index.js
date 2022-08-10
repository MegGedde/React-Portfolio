import React from 'react';
import mailIcon from '../../assets/email.jpg';
import linkedinIcon from '../../assets/linkedin.jpg';
import githubIcon from '../../assets/github.jpg';

function Footer() {
    return (
    <footer id="contact-me">
            <ul className="icons">
                <li>
                    <a href="mailto:meggedde@gmail.com">
                        <img src={mailIcon} className="pic" alt="mail"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/MegGedde">
                        <img src={githubIcon} className="pic" alt="github"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/megan-gedde-1731a495/">
                        <img src={linkedinIcon} className="pic" alt="linkedin"/>
                    </a>
                </li>
            </ul> 
    </footer>
    )
}

export default Footer;