import React from 'react';
import './About.css';

export default () => {
    return (
        <div className = "aboutPage">
            
            <img src = "https://pbs.twimg.com/profile_images/921378992225001472/V8QGMZFP_400x400.jpg" />
            <p>About me:</p>
            <p>My name is <span>Kenneth</span></p>
            <p> I am web development student currently learning the following technologies:</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>React</li>
                <li>SQL</li>
                <li>NoSQL</li>
            </ul>

        </div>
    )
}