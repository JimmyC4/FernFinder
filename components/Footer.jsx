import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

function Footer() {
  return (
    
    <div className='footer-container'>

      <section class="newsletter">
        <h1>Join our newsletter:</h1>

        <form class='input'>
      <input
        aria-label="Your first name"
        name="fields[first_name]"
        placeholder="Your first name"
        type="text"
      />
      <input
        aria-label="Your email address"
        name="email_address"
        placeholder="Your email address"
        required
        type="email"
      />
      <button class="subscribe">Subscribe</button>
    </form>
      </section> 
      {/* <img src="/images/footer.png" alt=""/> */}
      <p>2022 Fernfinder. All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook />
      </p>
    </div>
  )
}

export default Footer