import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner}
from '../components';
import Iframe from 'react-iframe';

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className="products-heading">
          <h2 id="products">Products</h2>
          <hr/>
      </div>
      <section className='two'>
        <div className="products-container">
          {products?.map(
          (product) => <Product key=
          {product._id} product={product} />)}
        </div>
      </section>

      <div className='center_container'>
        <h1 className='heading'>Here's a selection of videos to help <br/>nurture your knowledge.</h1>
      </div>
      
      <div className='video_container'>
        <div className='video'>
          <Iframe
              url="https://www.youtube.com/embed/pTCsabfYWJA?autoplay=0&mute=0&rel=0&controls=0&showinfo=0&modestbranding=1&VQ=HD1080&loop=1}" loop="1" frameBorder="1" allowFullScreen position="relative" playsInline
              width="100%" height="100%" />
        </div>
        <div className='video'>
          <Iframe
              url="https://www.youtube.com/embed/LZhnCxG5c6s?autoplay=0&mute=0&rel=0&controls=0&showinfo=0&modestbranding=1&VQ=HD1080&loop=1}" loop="1" frameBorder="0" allowFullScreen position="relative" playsInline
              width="100%" height="100%" />
        </div>
        <div className='video'>
          <Iframe
              url="https://www.youtube.com/embed/ugKWkJyGFQg?autoplay=0&mute=0&rel=0&controls=0&showinfo=0&modestbranding=1&VQ=HD1080&loop=1}" loop="1" frameBorder="0" allowFullScreen position="relative" playsInline
              width="100%" height="100%" />
        </div>
        <div className='video'>
          <Iframe
              url="https://www.youtube.com/embed/Xb5OkAVT09M?autoplay=0&mute=0&rel=0&controls=0&showinfo=0&modestbranding=1&VQ=HD1080&loop=1%7D}" loop="1" frameBorder="0" allowFullScreen position="relative" playsInline
              width="100%" height="100%" />
        </div>
        
      </div>
      

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {products, bannerData }
  }
}

export default Home