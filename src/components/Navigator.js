import React from 'react'
import { Link } from 'react-router-dom';
import navbar_nav_styles from './Navigator.css'
import write from '../Img/writeup.png'
import { NavLink } from 'react-router-dom';
export default function Navigator() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:'fixed', width:'100%', padding:'10px 10px', zIndex:'3'}} >
        <Link to="/" className="navbar-brand"><img src={write} alt="Logo" style={{height:'50px',width:'100px'}}/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={navbar_nav_styles}>
          <ul className="navbar-nav mr-auto" >
            <li className="nav-item">
              <NavLink exact={true} to="/" className="nav-link" activeStyle={{color: '#065d66', borderBottom:'2px solid #589ba2', fontWeight: 500}}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Skills" className="nav-link" activeStyle={{color: '#065d66', borderBottom:'2px solid #589ba2', fontWeight: 500}}>Skills</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Experience" className="nav-link" activeStyle={{color: '#065d66', borderBottom:'2px solid #589ba2', fontWeight: 500}}>Experience</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Education" className="nav-link" activeStyle={{color: '#065d66', borderBottom:'2px solid #589ba2', fontWeight: 500}}>Alma-Mater</NavLink>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">Projects</a>
            </li> */}
          </ul>
        </div>
      </nav>
    )
}
