import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from'react-router-dom';
import './Header.css'

export default () => {

    const [collapse, setCollapse] = useState("splash")
     
    return (
        <div> 
            <div className = {collapse} onClick = {() => {setCollapse("splash collapsed")}}> 
                Hello.  My name is Diver.  I write code.
            </div>
        <nav>
            <ul>
                 <Link to='/about' ><li>About</li></Link>
                <Link to='/projects' ><li>Projects</li></Link>
                <Link to='/contact' ><li>Contact</li></Link>
            </ul>
        </nav>
        </div>
    )
}