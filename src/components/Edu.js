import React from 'react'
import edu_style from '../components/css/Edu.css'
export default function Edu(props) {
    return (
            <div className="front_et" style={edu_style}>
                <h1>{props.title}</h1>
                <ul>
                <li>{props.time}</li>
                <li>{props.degree}</li>
                <li>{props.marks}</li>
                </ul>
                <a href={props.link} target='_blank' rel="noreferrer">&gt; Learn More</a>
            </div>
        
    )
}
