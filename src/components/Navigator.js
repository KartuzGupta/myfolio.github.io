import React from 'react'
import navbar_nav_styles from './Navigator.css'
import write from './Img/writeup.png'
export default function Navigator() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:'fixed', width:'100%', padding:'10px 10px', zIndex:'3'}} >
        <a className="navbar-brand" href="/" ><img src={write} alt="Logo" style={{height:'50px',width:'100px'}}/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={navbar_nav_styles}>
          <ul className="navbar-nav mr-auto" >
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}
