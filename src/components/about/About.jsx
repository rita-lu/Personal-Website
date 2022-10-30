import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div> */}

          <p>
            Hi, I'm Rita! I graduated from University of Toronto in 2021 with a Bachelor's degree in Computer Engineering. I completed an internship at Oracle where I worked on a Marketing Automation Platform called Eloqua.
            Currently, I'm working at Microsft as a full-stack software engineer in Azure CXP.
          </p>

          {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}

        </div>
      </div>
    </section>
  )
}

export default About