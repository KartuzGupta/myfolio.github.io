import React from 'react'
import edu_style from './Edu.css'
export default function Edu(props) {
    return (
        
            <div className="front_et" style={edu_style}>
                <h1>{props.title}</h1>
                <ul>
                <li>{props.time}</li>
                <li>{props.degree}</li>
                <li>{props.marks}</li>
                </ul>
            </div>
        
    )
}
