import React from 'react';


const About = () => {
  return (
    <section className='about'>
        <div className="about-holder">
            <div className="plantimages">
            <img src="/images/potplantbg.png" alt="image" className="pp2" />
            <img src="/images/potplant.png" alt="image" className="pp1" />
            </div>
            <div className="about-text">
                <h1>Our goals = <br/><span className="underline">your goals:</span></h1>
                <p>Fernfinder has been hand-crafted for those who have just begun their plant journey, and want to start or add to their collection. </p>
                <p>We help new plant owners pick the perfect indoor plant for them, and provide guides and descriptions for your plants, terrariums and starter kits. </p>
            </div>
        </div>
    </section>
  )
}

export default About