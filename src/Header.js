import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link as LinkRou, Outlet } from 'react-router-dom'
import { Link } from 'react-scroll'
import Image from './Image'
import Section2 from './Section2'
export default function Header() {
  return (
    <div >
        <div className='home container-fluied     '>
      <nav class="navbar navbar-expand-lg sticky-top     ">
  <div class="container-fluid ">
    <a class="navbar-brand text-light w-25 ms-5 " href="#">LOGO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse   ms-5" id="navbarSupportedContent">
      <ul class="navbar-nav me-0 mb-2 mb-lg-0    Hul">
        <li class="nav-item mx-2  ">
          <a class="nav-link active   text-light  " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item  mx-2">
          <Link class="nav-link text-light "  activeClass="active" 
         to='sec2'
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={100} 
      ><span className='nav-link text-light'>Skills</span></Link>
        </li>
        <li class="nav-item  mx-2">
        <Link  activeClass="active" 
      to="sec3Scroll"
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={100} className='nav-link text-light' ><LinkRou to="sec3">Projects</LinkRou></Link></li>
        
        <li class="nav-item d-flex  mx-2 ms-0 ">
          <a class="nav-link navIcons ms-0 mx-3  text-light  "  href="https://www.linkedin.com/in/mohamed-moussa-b564ab315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" tabindex="-1" aria-disabled="true"><FontAwesomeIcon  icon={faLinkedinIn} /></a>
          <a class="nav-link navIcons ms-0 mx-3  text-light  " href="#" tabindex="-1" aria-disabled="true"><FontAwesomeIcon icon={faFacebook} /></a>
          <a class="nav-link  navIcons ms-0 mx-3  text-light " href="#" tabindex="-1" aria-disabled="true"><FontAwesomeIcon icon={faTwitter} /></a>
        </li>
        <li class="nav-item mx-4 ms-3 ">
            <button className='btn btn-dark text-light ms-0 mt-1  btnConnect ' ><span >lets connect</span></button>
        </li>

      </ul>
    </div>
  </div>
</nav>
<Image/>
</div>
<Section2/>
<Outlet/>
    </div>
  )
}
