import React from 'react'
import exp_styles from './Experience.css'
import Exp from './Exp'
import exp from './Img/exp_rb.png'
import barberalogo from './Img/barberalogo.png'
import infinito from './Img/infinito.png'
import ecelllogo from './Img/ecelllogo.png'
import njacklogo from './Img/njacklogo.jpg'

export default function Experience() {
    return (
        
            <div  style={exp_styles}>
            <div className="loc">
                <p>Experience</p>
            </div>
            <div className="front_ex" >
                <div className="left_ex">
                    <img src={exp} alt="" srcset="" />
                </div>
                <div className="right_ex">
                    <h1>Experience</h1>
                    <p>“Do you know the difference between education and experience? Education is when you read the fine print; experience is what you get when you don't. ”</p>
                    <p>― Pete Seeger</p>
                </div>
            </div>
            <h1 className="exp_h1">Work Experience</h1>
            <hr className="hrstyle" />
            <div className="educate_tag">
                <div className="img_ex">
                <img src={barberalogo} alt="" srcset="" />
                </div>
                <Exp title='Barbera' position='Front-End Web Developer' time='July 2021 - Present' role='Trainee'/>
            </div>
            <h1 className="exp_h1">POR's</h1>
            <hr className="hrstyle" />
            <div className="educate_tag">
                <div className="img_ex">
                <img src={infinito} alt="" srcset="" />
                </div>
                <Exp title='Infinito IIT Patna' position='Sub-Coord, Web and App Dev Committee' time='August 2021 - Present' role='Annual Sports Fest of IIT Patna'/>
            </div>
            <div className="educate_tag">
                <div className="img_ex">
                <img src={ecelllogo} alt="" srcset="" />
                </div>
                <Exp title='E-Cell IIT Patna' position='Sub-Coord, Tech and Dev Committe' time='August 2021 - Present' role=''/>
            </div>
            <div className="educate_tag">
                <div className="img_ex">
                <img src={njacklogo} alt="" srcset="" />
                </div>
                <Exp title='NJACK IIT Patna, OS and Dev' position='Sub-Coord, OS and Dev' time='October 2021 - Present' role=''/>
            </div>
            <br/>
            <br/>
            </div>
        
        
    )
}
