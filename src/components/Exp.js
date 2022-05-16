import React from 'react'
import Exp_style from '../components/css/Exp.css'
import info from '../Img/info.png'
export default function Exp(props) {
    return (
        
            <div className="front_ext" style={Exp_style}>
                <div style={{display:'flex'}}>
                <h1>{props.title}</h1> 
                <a href={props.link} rel="noreferrer" target='_blank'><img src={info} alt="Learn More" srcset="" /></a>
                </div>
                <h2>{props.position}</h2>
                <p style={{color:'#464444'}}>{props.abt}</p>
                <p>{props.time}</p>
                <hr className="exp_hr" />
            </div>
        
    )
}
