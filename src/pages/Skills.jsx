import html_logo from '../Img/htmllogo.png'
import css_logo from '../Img/csslogo.png'
import reactjs_logo from '../Img/reactjslogo.png'
import js_logo from '../Img/jslogo.png'
import c_logo from '../Img/clogo.png'
import cpp_logo from '../Img/cpplogo.png'
import btstrap from '../Img/btstrap.png'
import gitbash from '../Img/gitbash.png'
import skill from '../Img/skills1.svg'
import php from '../Img/php.png'
import mysql from '../Img/mysql.png'
import tailwind from '../Img/tailwind.png'
import solidity from '../Img/solidity.png'
import skill_style from './css/Skills.css'
import SkillsUpper from '../components/SkillsUpper'
import './css/card.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Skills = () => {
    useEffect(() => {
        Aos.init({duration: 800});
    }, [])

    return (
        <div>
            <div className="front_skill">
                <div className="skill_lef" style={skill_style}>
                    <img src={skill} alt="" srcset="" />
                </div>
                <div className="skill_rig" data-aos="fade-up" data-aos-once="true">
                    <h1>Skills</h1>
                    <p>"Talent you have naturally. Skill is only developed by hours and hours and hours of beating on your craft."
                    </p>
                    <p>– Will Smith</p>
                </div>
            </div>

            <section className="skills">

                <SkillsUpper/>

                <div className="lang_edu" style={{marginTop:'40px'}}>
                    <h1>Familiar with..</h1>
                    <div className="lang_box">
                        <img src={html_logo} alt="" srcset="" data-aos="zoom-in-down" data-aos-once="true"/>
                        <img src={css_logo} alt="" srcset=""  data-aos="zoom-in-down" data-aos-once="true"/>
                        <img src={js_logo} alt="" srcset=""  data-aos="zoom-in-down" data-aos-once="true"/>
                        <img src={reactjs_logo} alt="" srcset=""  data-aos="zoom-in-down" data-aos-once="true"/>
                        <img src={php} alt="" srcset=""  data-aos="zoom-in-down" data-aos-once="true"/>
                        <img src={mysql} alt="" srcset=""  data-aos="zoom-in-down" data-aos-once="true"/>
                        <img src={c_logo} alt="" srcset=""  data-aos="zoom-in-down" data-aos-once="true"/>
                        <img src={cpp_logo} alt="" srcset=""  data-aos="zoom-in-down" data-aos-once="true"/>
                        <img src={gitbash} alt="" srcset=""  data-aos="zoom-in-down" data-aos-once="true"/>
                        <img src={btstrap} alt="" srcset=""  data-aos="zoom-in-down" data-aos-once="true"/> 
                        <img src={solidity} alt="" srcset=""  data-aos="zoom-in-down" data-aos-once="true"/>
                        <img src={tailwind} alt="" srcset=""  data-aos="zoom-in-down" data-aos-once="true"/>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;