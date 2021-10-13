import React from 'react'
import home_style from './Home.css'
import welocome from './Img/welcome_rb.png'
import profile from './Img/profile.png'
import home from './Img/home.png'
import dob from './Img/dob.png'
import phone from './Img/phone.png'
import email from './Img/email.png'
import frontend from './Img/frontendlogo.png'
import cp from './Img/cplogo.png'
import devtool from './Img/devtool.png'
import html_logo from './Img/htmllogo.png'
import css_logo from './Img/csslogo.png'
import reactjs_logo from './Img/reactjslogo.png'
import js_logo from './Img/jslogo.png'
import c_logo from './Img/clogo.png'
import cpp_logo from './Img/cpplogo.png'
import btstrap from './Img/btstrap.png'
import gitbash from './Img/gitbash.png'
import Animated from './Animated_bg'

export default function Home() {
    return (
        <div style={home_style}>
            <Animated />
            <div className="loc">
                <p>Home</p>
            </div>
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
                    <div className="static-txt">I'm a</div>
                    <ul className="dynamic-txts">
                    <li><span>Competitive Programmer</span></li>
                    <li><span>Frontend Web Developer</span></li>
                    <li><span>Open-Source Contributor</span></li>
                    <li><span>Mechanical Engineer</span></li>
                    </ul>
                </div>
                </div>
            </div>
            <section className="abt_me">
                <h1>About Me</h1>
                <hr className="hrhome" />
                <div className="para">
                    <div className="para1">
                        Quick Learner | Ethical | Ambitious
                    </div>
                    <div className="para2">
                        An Undergrad from Indian Institute of Technology , Patna. A highly motivated and ambitious person always ready to try out new things.
                        A flexible individual with an ability to adapt to changes. A curiosity to know everything. Trying to bring out the best version of myself.
                        Ready to deliver.
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
                    <hr className="hrdet"/>
                    <p>Experienced with: HTML/CSS, JavaScript,
                     ReactJS</p>
                    </div>
               </div>
               <div className="skill_tag">
                    <div className="img_skill">
                    <img src={cp} alt="" srcset="" style={{height:'140px',width:'140px'}}/>
                    </div>
                    <div className="skill_det">
                    <h1>Competitive Programming</h1>
                    <hr className="hrdet"/>
                    <p>Languages: C++ , C</p>
                    <p><span>1711 </span>(max. rating) on Codechef</p>
                    <p><span>1103 </span>(max. rating) on Codeforces</p>
                    </div>
               </div>
               <div className="skill_tag">
                    <div className="img_skill">
                    <img src={devtool} alt="" srcset="" style={{height:'140px',width:'140px'}}/>
                    </div>
                    <div className="skill_det">
                    <h1>Other Developer Tools</h1>
                    <hr className="hrdet"/>
                    <p>VS Code, GitHub</p>
                    </div>
               </div>
               <div className="lang_edu">
                <h1>Familiar with..</h1>
                <div className="lang_box">
                    <img src={html_logo} alt="" srcset="" />
                    <img src={css_logo} alt="" srcset="" />
                    <img src={js_logo} alt="" srcset="" />
                    <img src={reactjs_logo} alt="" srcset="" />
                    <img src={c_logo} alt="" srcset="" />
                    <img src={cpp_logo} alt="" srcset="" />
                    <img src={gitbash} alt="" srcset="" />
                    <img src={btstrap} alt="" srcset="" />
                    
                </div>
            </div>
            </section>
        </div>
    )
}

