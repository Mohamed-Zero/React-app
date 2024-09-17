import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { useTypewriter,Cursor } from 'react-simple-typewriter'

export default function Section5() {

  return (
    <div>
      <div className='container-fluid d-flex mt-3'>
        <h2 className=' text-light  ms-5 '>Logo</h2>

        <div className='sec5_icons d-flex  text-center m-auto me-2'>
        <a class=" nav-link  navIcons ms-0 mx-3  text-light text-center  " href="https://www.linkedin.com/in/mohamed-moussa-b564ab315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"  tabindex="-1" aria-disabled="true"><FontAwesomeIcon className='ico' icon={faLinkedinIn} /></a>
          <a class="nav-link navIcons ms-0 mx-3  text-light text-center " href="#" tabindex="-1" aria-disabled="true"><FontAwesomeIcon className='ico' icon={faFacebook} /></a>
          <a class="nav-link  navIcons ms-0 mx-3  text-light text-center" href="#" tabindex="-1" aria-disabled="true"><FontAwesomeIcon className='ico' icon={faTwitter} /></a>
        </div>
      </div>
        <h5> @copy right by Mohamed Moussa in 2024</h5>
    </div>
  )
}
