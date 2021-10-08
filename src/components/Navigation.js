import React from 'react';
import Nav_style from './Navigation.css'
export default function Navigation() {
    

    return (
        <div style={Nav_style}>
            <div id="black_top">

            </div>
            <nav className="navbar background h-nav-resp" id="mySidenav">
            <ul className="nav-list v-class-resp">
                <div className="nav_icon">
                <li><a href="/">Home</a></li>
                </div>
                <hr/>
                <div className="nav_icon">
                <li><a href="/Education">Education</a></li>
                </div>
                <hr/>
                <div className="nav_icon">
                <li><a href="/Experience">Experience</a></li>
                </div>
                <hr/>   
                <div className="nav_icon">
                <li><a href="/">Projects</a></li>
                </div>
                <hr/>
                <div className="nav_icon">
                <li><a href="/">Resume</a></li>
                </div>
                <hr/>
            </ul>
            {/* <!--Side Option For small screens--> */}
            <div className="burger" onclick="myFunction(this)">
                <div className="line" id="bar1"></div>
                <div className="line" id="bar2"></div>
                <div className="line" id="bar3"></div>
            </div>
        </nav>
        </div>
    )  
}

Navigation.defaultProps={
   title: "Enter a name"
}
