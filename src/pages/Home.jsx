import React from 'react'
import home_style from './css/Home.css'
import welocome from '../Img/helloSvg.svg'
import profile from '../Img/profile.png'
import home from '../Img/home.png'
import dob from '../Img/dob.png'
import phone from '../Img/phone.png'
import email from '../Img/email.png'
import Animated from '../components/Animated_bg'
import './css/card.css'

//import Resume from '../Files/Resume.pdf'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import SkillsUpper from '../components/SkillsUpper'
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
            <SkillsUpper/>
        </div>
    )
}

