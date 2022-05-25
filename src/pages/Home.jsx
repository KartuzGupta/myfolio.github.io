import React from 'react'
import home_style from './css/Home.css'
import welocome from '../Img/helloSvg.svg'
import profile from '../Img/profile.png'
import home from '../Img/home.png'
import dob from '../Img/dob.png'
import phone from '../Img/phone.png'
import email from '../Img/email.png'
import frontend from '../Img/frontendlogo.png'
import cp from '../Img/cplogo.png'
import devtool from '../Img/devtool.png'
import Animated from '../components/Animated_bg'
import Counterup from '../components/Counter_up'
import './css/card.css'

//import Resume from '../Files/Resume.pdf'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Home() {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])
    return (
        <div style={home_style}>
            <Animated />
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
                        <div className="static-txt" style={{background:'transparent'}}>I'm a</div>
                        <ul className="dynamic-txts">
                        <li><span>Competitive Programmer</span></li>
                        <li><span>Web Developer</span></li>
                        <li><span>Open-Source Contributor</span></li>
                        <li><span>Mechanical Engineer</span></li>
                        </ul>
                    </div>
                    <div className="resume">
                        <a href="https://drive.google.com/file/d/1DIZf9ePO0BGsF7ZH5QSSq8H47J-Yo2hK/view?usp=sharing" target="_blank" rel="noreferrer" >
                            <button class="custom-btn btn-15">View Resume</button>
                        </a>
                    </div>
                </div>
            </div>
            <section className="abt_me" data-aos="fade-up" data-aos-once="true">
                <h1>About Me</h1>
                <hr className="hrhome" />
                <div className="para">
                    <div className="para1">
                        Quick Learner | Ethical | Ambitious
                    </div>
                    <div className="para2">
                        An Undergrad from Indian Institute of Technology , Patna. A highly motivated and ambitious person always ready to try out new things.
                        A curious individual with an ability to adapt to changes. Trying to bring out the best version of myself.
                        Ready to deliver.
                    </div>
                    <div className="point_det">
                        <div className="ico">
                            <img src={dob} alt="" srcset="" />
                            <p>11 / 12 / 2002</p>
                            </div>
                        <div className="ico">    
                            <img src={email} alt="" srcset="" />
                            <p><a href="mailto:kartikay.gupta2002@gmail.com" style={{color:'black'}}>kartikay.gupta2002@gmail.com</a></p>
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
                
                <div className="card" >
                <div className="skill_tag" data-aos="fade-up" data-aos-once="true">
                    <div className="img_skill">
                    <img src={frontend} alt="" srcset="" />
                    </div>
                    <div className="skill_det">
                    <h1>Web Development</h1>
                    <hr className="hrdet"/>
                    <p>Experienced with: HTML/CSS, JavaScript
                    , ReactJS, PHP, MySQL, Bootstrap</p>
                    </div>
               </div>
               </div>
               
               <div className="card">
               <div className="skill_tag" data-aos="fade-up" data-aos-once="true">
                    <div className="img_skill">
                    <img src={cp} alt="" srcset="" style={{height:'140px',width:'140px'}}/>
                    </div>
                    <div className="skill_det">
                    <h1>Competitive Programming</h1>
                    <hr className="hrdet"/>
                    <p>Languages: C++ , C</p>
                    <Counterup end="1711" /><p>(max. rating) on Codechef</p>
                    <Counterup end="1103" /><p>(max. rating) on Codeforces</p>
                    </div>
               </div>
               </div>
               <div className="card" style={{marginBottom:'30px'}}>
               <div className="skill_tag" data-aos="fade-up" data-aos-once="true">
                    <div className="img_skill">
                    <img src={devtool} alt="" srcset="" style={{height:'140px',width:'140px'}}/>
                    </div>
                    <div className="skill_det">
                    <h1>Other Developer Tools</h1>
                    <hr className="hrdet"/>
                    <p>VS Code, GitHub</p>
                    </div>
               </div>
               </div>
              
            </section>
        </div>
    )
}

