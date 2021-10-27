import React from 'react'
import exp_styles from './Experience.css'
import Exp from '../components/Exp'
import exp from '../Img/exp.svg'
import barberalogo from '../Img/barberalogo.png'
import infinito from '../Img/infinito.png'
import ecelllogo from '../Img/ecelllogo.png'
import njacklogo from '../Img/njacklogo.jpg'
//import gitLogo from '../Img/GitHub-Mark.png'
//import linkedin from '../Img/linkedin.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Experience() {
    useEffect(() => {
        Aos.init({duration: 800});
    }, [])
    return (
            <div  style={exp_styles}>
            {/* <div className="loc">
                <p>Experience</p>
            </div> */}
            <div className="front_ex" >
                <div className="left_ex">
                    <img src={exp} alt="" srcset="" />
                </div>
                <div className="right_ex" data-aos="fade-up" data-aos-once="true">
                    <h1>Experience</h1>
                    <p>“Do you know the difference between education and experience? Education is when you read the fine print; experience is what you get when you don't. ”</p>
                    <p>― Pete Seeger</p>
                </div>
            </div>
            <h1 className="exp_h1">Work Experience</h1>
            <hr className="hrstyle" />
            <div className="educate_tag" data-aos="fade-up" data-aos-once="true">
                <div className="img_ex">
                <img src={barberalogo} alt="" srcset="" />
                </div>
                <div className="exp_cont">
                    <Exp title='Barbera' position='Front-End Web Developer' time='July 2021 - October 2021' abt='An IITP startup which provides online salon services' link='https://barbera.netlify.app/'/>
                    <li>Built the website using <strong>HTML, CSS and JavaScript</strong> with a team of developers.</li>
                </div>
                {/* <div className="expLinkBox">
                    <a href="/"><img src={linkedin} alt="" srcset="" /></a>
                    <a href="/"><img src={gitLogo} alt="" srcset="" /></a>
                </div> */}
            </div>
            <h1 className="exp_h1">POR's</h1>
            <hr className="hrstyle" />
            <div className="educate_tag" data-aos="fade-up" data-aos-once="true">
                <div className="img_ex">
                <img src={njacklogo} alt="" srcset="" />
                </div>
                <div className="exp_cont">
                <Exp title='NJACK IIT Patna' position='Sub-Coord, OS and Dev' time='October 2021 - Present' link='https://njack.iitp.ac.in/' />
                <li>Worked as a <strong>Frontend Web Developer (used ReactJS)</strong> in <strong>CODEPEAK 2021</strong> website (An open source programme conducted by NJACK,IIT Patna in collaboration with Coding Club,IIT Guwahati).</li> 
                </div>
                {/* <div className="expLinkBox">
                    <a href="/"><img src={linkedin} alt="" srcset="" /></a>
                    <a href="/"><img src={gitLogo} alt="" srcset="" /></a>
                </div> */}
            </div>
            <div className="educate_tag"  data-aos="fade-up" data-aos-once="true">
                <div className="img_ex">
                <img src={infinito} alt="" srcset="" />
                </div>
                <div className="exp_cont">
                <Exp title='Infinito IIT Patna' position='Sub-Coord, Web and App Dev Committee' time='August 2021 - Present' link='https://www.linkedin.com/company/infinito-iit-patna/'/>
                <li>Annual Sports Fest of IIT Patna</li>
                </div>
            </div>
            <div className="educate_tag"  data-aos="fade-up" data-aos-once="true">
                <div className="img_ex">
                <img src={ecelllogo} alt="" srcset="" />
                </div>
                <div className="exp_cont">   
                    <Exp title='E-Cell IIT Patna' position='Sub-Coord, Tech and Dev Committe' time='August 2021 - Present' abt='' link='https://ecell.iitp.ac.in/'/>
                    <li>Entrepreneurship Club - IIT Patna</li>
                </div>
            </div>
           
            <br/>
            <br/>
            </div>
        
        
    )
}
