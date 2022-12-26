import React, { useRef } from 'react';
import Contact from '../Components/Contact';
import FooterOutside from '../Components/FooterOutside';
import Top from '../Components/top';
import Top1 from '../Components/top1';


export default function ContactUs(){
    
    return (
        <div>
        <Top1  />
        <Contact />
       
        <FooterOutside />
      </div>
    );
}