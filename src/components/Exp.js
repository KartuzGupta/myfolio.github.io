import React from 'react'
import Exp_style from './Exp.css'
export default function Exp(props) {
    return (
        
            <div className="front_ext" style={Exp_style}>
                <h1>{props.title}</h1>
                <h2>{props.position}</h2>
                <hr className="exp_hr" />
                <p>{props.time}</p>
                <p>{props.role}</p>
            </div>
        
    )
}
