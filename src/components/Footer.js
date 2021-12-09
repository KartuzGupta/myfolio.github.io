import React from 'react'
//import logo_insta from '../Img/insta.png'
//import logo_git from '../Img/GitHub-Mark.png'
//import logo_codechef from '../Img/codechef.png'
//import logo_codeforces from '../Img/codeforces.png'
//import logo_linkedin from '../Img/linkedin.png'
import footer_style from './Footer.css'
//import logo_twitter from '../Img/twitter.png'
//import logo_mail from '../Img/mail.png'
import {SiCodeforces , SiCodechef, SiTwitter, SiGmail} from "react-icons/si"
import { VscGithubAlt } from "react-icons/vsc";
import {GrLinkedinOption} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'
import Button from 'react-bootstrap/Button';
export default function Footer() {
    const hr_style={
        width: '50%',
        display: 'block',
        margin: 'auto',
        backgroundColor: 'black'
    }

    return (
        <div>
            <footer style={footer_style}>
                <div className="reach" >
                    <div className="box_reach">
                    <h1>CP Platforms</h1>
                    <hr style={hr_style}/>
                    <div className="icon_box cp">
                        <div className="icon_circle">
                        <a href="https://codeforces.com/profile/aatma" target="_blank" rel="noreferrer">    
                            <SiCodeforces/>
                        </a>
                        </div>
                        <div className="icon_circle">
                        <a href="https://www.codechef.com/users/aatma" target="_blank" rel="noreferrer"><SiCodechef /></a>
                        </div> 
                    </div>
                    </div>
                    <div className="box_reach">
                    <h1>Stay in Touch</h1>
                    <hr style={hr_style} />
                    <div className="icon_box social" >
                        <div className="icon_circle">
                            <a href="https://github.com/KartuzGupta" target="_blank" rel="noreferrer" ><VscGithubAlt /></a>
                        </div>
                        <div className="icon_circle">
                            <a href="https://www.linkedin.com/in/kartikay-gupta/" target="_blank" rel="noreferrer">< GrLinkedinOption /></a>
                        </div>
                        
                        <div className="icon_circle">
                            <a href="https://www.instagram.com/kartikay_gpt/" target="_blank" rel="noreferrer"><BsInstagram/></a>
                        </div>

                        <div className="icon_circle">
                            <a href="https://twitter.com/aatma_0" target="_blank" rel="noreferrer"><SiTwitter/></a>
                        </div>

                        <div className="icon_circle">
                            <a href="mailto:kartikay.gupta2002@gmail.com" target="_blank" rel="noreferrer"><SiGmail/></a>
                        </div>
                        
                        
                    </div>
                    </div>  
                     
                </div>
            </footer>
        </div>
    )
}
