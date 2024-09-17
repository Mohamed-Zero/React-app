import React from 'react'
import Section4 from './Section4';
import img from './images/Sec3b2img.jpeg'
export default function Section3B2() {
  return (
    <div>
    <div className='container-fluied d-flex mt-5 Sec3-Img '>

        <div className='w-50 m-auto img '>
        <img className='Img' src ={img
          
        } height="100px" width="100px" alt="bubbles"></img>
        </div>

    <form class="row g-3 text-light w-50 mt-3 mb-3  mx-4">
      <h2>Get In Touch</h2>
  <div class="col-sm-6  inp">
    <input type="email" class="form-control     rounded-3 " id="inputEmail4" placeholder="First Name"></input>
  </div>
  <div class="col-sm-6 inp ">
    <input type="password" class="form-control    rounded-3 " id="inputPassword4" placeholder="Last Name"></input>
  </div>
  <div class="col-sm-6 inp ">
    <input type="text" class="form-control    rounded-3 " id="inputAddress" placeholder="Email Address"></input>
  </div>
  <div class="col-sm-6 inp ">
    <input type="text" class="form-control    rounded-3 " id="inputAddress2" placeholder="Phone No."></input>
  </div>
  <div class="col-sm-12 inp ">
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>  </div>
  <div class="col-12  ">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
</div>
<Section4/>
</div>
  )
}
