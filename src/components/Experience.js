import React from 'react'
import exp_styles from './Experience.css'
import Edu from './Edu'
import exp from './Img/exp.png'
import barberalogo from './Img/barberalogo.png'
import infinito from './Img/infinito.png'
//import barberalogo from './Img/barberalogo.png'

export default function Experience() {
    return (
        
            <div  style={exp_styles}>
            <div className="front_ex" >
                <div className="left_ex">
                    <img src={exp} alt="" srcset="" />
                </div>
                <div className="right_ex">
                    <h1>Experience</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis ex quia veniam quasi vel rerum.</p>
                </div>
            </div>
            <h1>Work Experience</h1>
            <hr className="hrstyle" />
            <div className="educate_tag">
                <div className="img_ex">
                <img src={barberalogo} alt="" srcset="" />
                </div>
                <Edu title='Barbera' time='Front-End Web Developer' degree='July 2021 - Present' marks='Trainee'/>
            </div>
            <h1>Volunteering</h1>
            <hr className="hrstyle" />
            <div className="educate_tag">
                <div className="img_ex">
                <img src={infinito} alt="" srcset="" />
                </div>
                <Edu title='Infinito IIT Patna' time='Sub-Coord, Web and App Dev Committee' degree='August 2021 - Present'/>
            </div>
            <div className="educate_tag">
                <div className="img_ed">
                <img src="" alt="" srcset="" />
                </div>
                <Edu title='E-Cell IIT Patna' time='Sub-Coord, Tech and Dev Committe' degree='10th CISCE Board' marks='95%'/>
            </div>
            </div>
        
        
    )
}
