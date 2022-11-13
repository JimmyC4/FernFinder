import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import Nav from './Nav';
import About from './About';
import Guide from './Guide';

function Layout({ children }) {
  
  return (
    <div className='layout'>
      <Head>
        <title>fernfinder.</title>
      </Head>
      <header>
        <Navbar />

      </header>
      
      <main className='main-container'>{children}</main>
      <About />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout