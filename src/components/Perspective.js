import React from 'react'
import heading_style from './Headings.css'
export default function Perspective(props) {
    return (
        <div style={heading_style}>
        <div class="page">
            <div class="text text--perspective" data-scroll="out" data-splitting="">{props.title}</div>
        </div>
        </div>
    )
}
