import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Astro from './images/Astro.svg'
import { useTypewriter,Cursor } from "react-simple-typewriter"
import { Typewriter } from 'react-simple-typewriter'
export default function Image() {
  return (
    <div className='container-fluid '>
      <div className='row'>
    <div className='ms-0 m-auto  mt-0 header_con  col-12 col-md-6   '>
      <button className='btn   mt-0 btnImg '> Welcome All In My Portfolio </button>
      <div className='contentImg  '>
        <span className='s1'>HI!I am Mohamed Moussa Hussain, <Typewriter
        words={['Full Stack','Front End']} 
        loop={Infinity}
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}
        /><Cursor/></span>
        <p className='p1'>Hello Everyone, I have 5 mounths of Experience in Web Development </p>
        <span className='s2'>let connect </span>
        <FontAwesomeIcon icon={faArrowAltCircleRight} className='sIcon' />
      </div>
    </div>
   <div className='col-12 col-md-6 astrona  text-center  m-auto  '>

    <div id='float' className=' text-center  m-auto'>
      <img className='imgAstro text-center m-auto ' src={Astro}></img>
    </div>
   </div>
   </div>
    </div>
  )
}
