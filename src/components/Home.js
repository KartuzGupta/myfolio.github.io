import React from 'react'
import home_style from './Home.css'
import welocome from './Img/welcome.png'
import profile from './Img/profile.png'
import home from './Img/home.png'
import dob from './Img/dob.png'
import phone from './Img/phone.png'
import email from './Img/email.png'
import frontend from './Img/frontendlogo.png'
import cp from './Img/cplogo.png'
import devtool from './Img/devtool.png'


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
            <section className="abt_me">
                <h1>About Me</h1>
                <hr className="hrhome"/>
                <div className="para">
                    <div className="para1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum esse possimus incidunt, quibusdam fugit necessitatibus qui magni quae enim dicta. Blanditiis repellendus rem in tempora, obcaecati est ut ratione ipsam possimus autem, omnis maxime cumque.
                    </div>
                    <div className="point_det">
                            <div className="ico">
                            <img src={dob} alt="" srcset="" />
                            <p>11 / 12 / 2002</p>
                            </div>
                            <div className="ico">    
                            <img src={email} alt="" srcset="" />
                            <p>kartikay.gupta2002@gmail.com</p>
                            </div>
                            <div className="ico">
                            <img src={phone} alt="" srcset="" />
                            <p>7007222154</p>
                            </div>
                            <div className="ico">
                            <img src={home} alt="" srcset="" />
                            <p>Kanpur, UP</p>
                            </div>
                    </div>    
                </div>
            </section>
            <section className="skills">
                <h1>Skills</h1>
                <hr className="hrhome"/>
                <div className="skill_tag">
                    <div className="img_skill">
                    <img src={frontend} alt="" srcset="" />
                    </div>
                    <div className="skill_det">
                    <h1>Frontend Web Development</h1>
                    <p>Languages: HTML/CSS, JavaScript</p>
                    <p>Framework: ReactJS</p>
                    </div>
               </div>
               <div className="skill_tag">
                    <div className="img_skill">
                    <img src={cp} alt="" srcset="" style={{height:'140px',width:'140px'}}/>
                    </div>
                    <div className="skill_det">
                    <h1>Competitive Programming</h1>
                    <p>Languages: C++ , C</p>
                    <p><span>Codechef</span> 1711(max. rating)</p>
                    <p><span>Codeforces</span> 1103(max. rating)</p>
                    </div>
               </div>
               <div className="skill_tag">
                    <div className="img_skill">
                    <img src={devtool} alt="" srcset="" style={{height:'140px',width:'140px'}}/>
                    </div>
                    <div className="skill_det">
                    <h1>Other Developer Tools</h1>
                    <p>VS Code, GitHub</p>
                    </div>
               </div>
            </section>
        </div>
    )
}

