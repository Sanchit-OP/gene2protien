import React, { useRef } from 'react';
import Contact from '../Components/Contact';
import FooterOutside from '../Components/FooterOutside';
import Top from '../Components/top';


export default function ContactUs(){
    
    return (
        <div>
        <Top color="white" />
        <Contact />
       
        <FooterOutside />
      </div>
    );
}