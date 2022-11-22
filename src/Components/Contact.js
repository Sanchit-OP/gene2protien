import React, { useRef,} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

export default function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_dcoqo2a', 'template_izt5kkr', form.current, 'sXMBNINHaf-HbMcNb')
        .then((result) => {
            console.log(result.text);
            console.log("sent!!!!");
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <div class="container mx-[7.5%] my-[9%]">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Address</div>
              <div class="text-one">Surkhet, NP12</div>
              <div class="text-two">Birendranagar 06</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
              <div class="topic">Phone</div>
              <div class="text-one">+0098 9893 5647</div>
              <div class="text-two">+0096 3434 5678</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
              <div class="topic">Email</div>
              <div class="text-one">codinglab@gmail.com</div>
              <div class="text-two">info.codinglab@gmail.com</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Send us a message</div>
            <p>If you have any work from me or any types of quries related to our products, you can send me message from here. It's my pleasure to help you.</p>
          <form ref={form} onSubmit={sendEmail}>
            <div class="input-box">
              <input type="text" placeholder="Enter your name" name='user_name'></input>
            </div>
            <div class="input-box">
              <input type="text" placeholder="Enter your email" name='user_email'></input>
            </div>
            <div class="input-box message-box">
             <textarea name="message" placeholder='Enter Your Message' />
            </div>
            <div class="button">
              <input  type="submit" value="Send" ></input>
            </div>
          </form>
            </div>
        </div>
      </div>
    );

}