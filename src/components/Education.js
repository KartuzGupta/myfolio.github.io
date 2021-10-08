import React from 'react'
import education from './Img/education.png'
import education_styles from './Education.css'
import Edu from './Edu'
import drvsec_logo from './Img/drvseclogo.png'
import iitp_logo from './Img/iitplogo.png'

//import Perspective from './Perspective'
export default function Education() {
    
    return (
        <div style={education_styles}>
            <div className="front_e">
                <div className="left_e">
                    <img src={education} alt="" srcset="" />
                </div>
                <div className="right_e">
                    <h1>Education</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis ex quia veniam quasi vel rerum.</p>
                </div>
            </div>
            <div className="educate_tag">
                <div className="img_ed">
                <img src={iitp_logo} alt="" srcset="" />
                </div>
                <Edu title='Indian Institute of Technology , Patna' time='2020-Present' degree='B.Tech in Mechanical Engineering' marks='9.39 CPI in 1st Year'/>
            </div>
            <div className="educate_tag">
                <div className="img_ed">
                <img src={drvsec_logo} alt="" srcset="" />
                </div>
                <Edu title='Dr. Virendra Swarup Education Centre' time='2018-2020' degree='12th CISCE Board' marks='96.5% PCM'/>
            </div>
            <div className="educate_tag">
                <div className="img_ed">
                <img src={drvsec_logo} alt="" srcset="" />
                </div>
                <Edu title='Dr. Virendra Swarup Education Centre' time='2016-2018' degree='10th CISCE Board' marks='95%'/>
            </div>
        </div>
    )
}
