import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';


function HeroBanner({ heroBanner }) {
  return (
    <section className='one'>
        <div className="bg-holder"><img src="/images/bg.png" className="bg" alt="" /></div>
      <div className="container1">

        <div className="hero-one">
          <h1 className="hero-text">Find your fern, <br/>explore the range and <br/>start your indoor plant <br/>journey.</h1>
          <a className="hero-button" href="#products">Browse our collection</a><br/>
        </div>

        <div className="hero-two">
          <img src="/images/plant2.png" alt="image" className="plant1" />
          <img src="/images/plant1.png" alt="image" className="plant2" />
        </div>
      
      </div>
    </section>
  )
}

export default HeroBanner