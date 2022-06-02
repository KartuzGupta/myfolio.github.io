import React from 'react'
import {SiCodechef, SiCodeforces, SiGmail, SiTwitter} from 'react-icons/si';
import { VscGithubAlt } from "react-icons/vsc";
import {GrLinkedinOption} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'
import './css/Footer.css';
export default function Footer() {

    const SocialDetails = [
        {
            "Iclass" : "fa-cf",
            "ALink" : "https://codeforces.com/profile/aatma",
            "SpanText" : "cf",
        },
        {
            "Iclass" : "fa-cc",
            "ALink" : "https://www.codechef.com/users/aatma",
            "SpanText" : "cc",
        },
        {
            "Iclass" : "fa-git",
            "ALink" : "https://github.com/KartuzGupta",
            "SpanText" : "git",
        },
        {
            "Iclass" : "fa-linkedin",
            "ALink" : "https://www.linkedin.com/in/kartikay-gupta/",
            "SpanText" : "linkedin",
        },
        {
            "Iclass" : "fa-gmail",
            "ALink" : "mailto:kartikay.gupta2002@gmail.com",
            "SpanText" : "gmail",
        },
        {
            "Iclass" : "fa-twitter",
            "ALink" : "https://twitter.com/aatma_0",
            "SpanText" : "twitter",
        },
        {
            "Iclass" : "fa-instagram",
            "ALink" : "https://www.instagram.com/kartikay_gpt/",
            "SpanText" : "instagram",
        },
        
        
    ];
    const SocialImage = ({ImageName}) => {
        if({ImageName}.ImageName === "cc"){
            return <SiCodechef/>;
        }
        if({ImageName}.ImageName === "cf"){
            return <SiCodeforces />;
        }
        if({ImageName}.ImageName === "gmail"){
            return <SiGmail />;
        }
        if({ImageName}.ImageName === "git"){
            return <VscGithubAlt />;
        }
        if({ImageName}.ImageName === "instagram"){
            return <BsInstagram />;
        }
        if({ImageName}.ImageName === "linkedin"){
            return <GrLinkedinOption />;
        }
        if({ImageName}.ImageName === "twitter"){
            return <SiTwitter />;
        }
        
    };
    const Social = ({Iclass, ALink, SpanText}) => {
        return (
            <li className={Iclass}>
                <a href={ALink}>
                <span><SocialImage ImageName={SpanText}/></span>
                </a>
            </li>
        );
    }
        
    return (
        <div className='footer'> 
            <ul>
                {SocialDetails.map((element) => {
                    return (
                        <>
                            <Social Iclass={element.Iclass} ALink={element.ALink} SpanText={element.SpanText}/>
                        </>
                    );
                })}
            </ul>
        </div>
    )
}
