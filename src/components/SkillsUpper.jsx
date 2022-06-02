import frontend from '../Img/frontendlogo.png'
import cp from '../Img/cplogo.png'
import devtool from '../Img/devtool.png'
import '../pages/css/Skills.css';
import Counterup from '../components/Counter_up'
import "../pages/css/card.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react'
import { useEffect } from "react";
const Rating = ({username, platform}) => {
    const Username = {username}.username;
    const Platform = {platform}.platform;
    console.log(Username);
    console.log(Platform);
    const[cfRating, setCfRating] = useState(0);
    const ccRating = "1711";
    const fetchRating = async () => {
        try {
            fetch(`https://competitive-coding-api.herokuapp.com/api/${Platform}/${Username}`)
                .then((res) => res.json())
                .then((data) => {
                console.log(data["max rating"]);
                setCfRating(data["max rating"]);
                })
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        fetchRating();
        // eslint-disable-next-line
    }, [username, platform]);

    return `${cfRating},${ccRating}`;
}

const SkillsUpper = () => {
    useEffect(() => {
        Aos.init({duration: 800});
    }, [])
    const ratingArray =Rating({username:"aatma", platform:"codeforces"}).split(',');
    const CfRating = ratingArray[0];
    const CcRating = ratingArray[1]; 

    return (
        <div>
            

            <section className="skills">
                <div className="card">
                <div className="skill_tag" data-aos="fade-up" data-aos-once="true">
                    <div className="img_skill">
                    <img src={frontend} alt="" srcset="" />
                    </div>
                    <div className="skill_det">
                    <h1>Web Development</h1>
                    <hr className="hrdet"/>
                    <p>Experienced with: HTML/CSS, JavaScript
                    , ReactJS, PHP, MySQL, Solidity, TailwindCSS, Bootstrap</p>
                    </div>
               </div>
               </div>
               <div className="card">
               <div className="skill_tag" data-aos="fade-up" data-aos-once="true">
                    <div className="img_skill">
                    <img src={cp} alt="" srcset="" style={{height:'140px',width:'140px'}}/>
                    </div>
                    <div className="skill_det">
                    <h1>Competitive Programming</h1>
                    <hr className="hrdet"/>
                    <p>Languages: C++ , C</p>
                    <Counterup end={`${CcRating}`} /><p>(max. rating) on Codechef</p>
                    <Counterup end={`${CfRating}`} /><p>(max. rating) on Codeforces</p>
                    </div>
               </div>
               </div>
               <div className="card">
               <div className="skill_tag" data-aos="fade-up" data-aos-once="true">
                    <div className="img_skill">
                    <img src={devtool} alt="" srcset="" style={{height:'140px',width:'140px'}}/>
                    </div>
                    <div className="skill_det">
                    <h1>Other Developer Tools</h1>
                    <hr className="hrdet"/>
                    <p>VS Code, GitHub</p>
                    </div>
               </div>
               </div>
            </section>
        </div>
    );
}

export default SkillsUpper;