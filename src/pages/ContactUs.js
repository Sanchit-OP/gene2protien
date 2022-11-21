import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Contact from '../Components/Contact';
import FooterOutside from '../Components/FooterOutside';

export default function ContactUs(){
    
    return (
        <div>
        <Contact />
        {/* <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form> */}
        <FooterOutside />
      </div>
    );
}