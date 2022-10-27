import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/rilu" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/rita-lu" target="_blank"><FaGithub/></a>
        <a href="mailto:ritalu33@hotmail.com"><MdEmail/></a>
    </div>
  )
}

export default HeaderSocials