import React from 'react'
import Section5 from './Section5'

export default function Section4() {
  return (
    <div>
      <div className='container rounded-4 row bg-light text-center text-capitalize Sec-4 m-auto'>
        <div className='d-flex'>
        <div className=' mt-3 p-2    '>
            <span className='Sec4Span '>enter your email here</span>
        </div>
        <div class="input-group  mb-4  text-center m-auto  mt-5">
        <input type="email" class="form-control rounded-3    m-auto text-center" id="inputPassword4" placeholder="your email"></input>
        <button class="btn btn-outline-secondary Sec4Btn text-light   m-auto text-center" type="button" id="button-addon2">Submit</button>
</div>
</div>
      </div>
      <Section5/>
    </div>
  )
}
