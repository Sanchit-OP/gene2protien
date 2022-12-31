import React, { useRef } from 'react';
import Contact from '../Components/Contact';
import FooterOutside from '../Components/FooterOutside';
import Top from '../Components/top';
import Top2 from '../Components/top2';


export default function ContactUs(){
    
    return (
        <div>
        <Top2  />
        <Contact />
       
        <FooterOutside />
      </div>
    );
}