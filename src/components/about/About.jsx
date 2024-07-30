import React from 'react';
import "./about.css";
import Image from  "../../assets/avatar-2.svg"
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className='section__title'>About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Jack Davis, Computer Science student at Georgia Tech.
              I'm passionate about Computer Networks, Operating Systems
              and Video Games.
            </p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about_skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">C, Python, Java</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
              <span className="skills__percentage primary"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML, CSS, JS, Socket Programming</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
              <span className="skills__percentage secondary"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About