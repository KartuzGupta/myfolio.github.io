import React from 'react'
import home_style from './Home.css'
import welocome from './Img/welcome.png'
import profile from './Img/profile.png'
export default function Home() {
    return (
        <div style={home_style}>
            <div className="front">
                <div className="left">
                    <img src={welocome} alt="Logo" srcset="" />
                </div>
                <div className="right">
                    <div className="name-txt">
                        Hello Guys, I am <strong>Kartikay Gupta</strong>
                    </div>
                    <div className="profile-pic">
                        <img src={profile} alt="" srcset="" />
                    </div>
                <div className="wrapper">
                    <div className="static-txt">I'm into</div>
                    <ul className="dynamic-txts">
                    <li><span>Competitive Programming</span></li>
                    <li><span>Frontend Web Development</span></li>
                    <li><span>Open-Source Contribution</span></li>
                    <li><span>Mechanical Engineering</span></li>
                    </ul>
                </div>
    
                </div>
            </div>
        </div>
    )
}
