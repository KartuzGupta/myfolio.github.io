import React from 'react'
import logo_insta from './Img/insta.png'
import logo_git from './Img/GitHub-Mark.png'
import logo_codechef from './Img/codechef.png'
import logo_codeforces from './Img/codeforces.png'
import logo_linkedin from './Img/linkedin.png'
import footer_style from './Footer.css'
import logo_twitter from './Img/twitter.png'
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
                        <a href="https://codeforces.com/profile/aatma" ><img src={logo_codeforces} alt="" /></a>
                        <a href="https://www.codechef.com/users/aatma" ><img src={logo_codechef} alt="" /></a> 
                    </div>
                    </div>
                    <div className="box_reach">
                    <h1>Stay in Touch</h1>
                    <hr style={hr_style} />
                    <div className="icon_box social" >
                        <a href="https://github.com/KartuzGupta"><img src={logo_git} alt="" /></a>
                        <a href="https://www.linkedin.com/in/kartikay-gupta-a21200206/" ><img src={logo_linkedin } alt=""/></a>
                        {/* <a href="https://codeforces.com/profile/aatma" ><img src={logo_codeforces} alt="" /></a>
                        <a href="https://www.codechef.com/users/aatma" ><img src={logo_codechef} alt="" /></a> */}
                        <a href="https://www.instagram.com/kartikay_gpt/" ><img src={logo_insta} alt="" /></a>
                        <a href="https://twitter.com/aatma_0" ><img src={logo_twitter} alt="" /></a>
                    </div>
                    </div>  
                     
                </div>
            </footer>
        </div>
    )
}
