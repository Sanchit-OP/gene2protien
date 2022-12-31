import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import bimg from "../Ui/Logonew2.svg";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dcoqo2a",
        "template_izt5kkr",
        form.current,
        "sXMBNINHaf-HbMcNb"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("sent!!!!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg-[#7cc576] p-1">
      <div class="container mx-[7.5%] my-[9%]">
        <div class="content">
          <div class="left-side">
            <div>
              <img src={bimg} className="w-3/5 mx-[25%] my-5 " alt="Logo" />
            </div>
            <div class="address details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Address</div>
              <div class="text-one">D-6, Lawrence Terrace, Hazratganj</div>
              <div class="text-two"> Lucknow, UP - 226001</div>
              <div class="text-one">Plot No.3, Ground Floor, Road No. 12,</div>
              <div class="text-two"> IDA Nacharam, Hyderabad 500 076</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
              <div class="topic">Phone</div>
              <div class="text-one"></div>
              <div class="text-two">7207116161</div>
              <div class="text-two">8004366637</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
              <div class="topic">Email</div>
              <div class="text-one"></div>
              <div class="text-two">
                Customer support: jhansi@genetoprotein.com
                Technical Support: techsupport@genetoprotein.com
                Sales Support: sales@genetoprotein.com
                general inquires: info@genetoprotein.com
              </div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Send us a message</div>
            <p>
              If you have any work from me or any types of queries related to
              our products, you can send me message from here. It's my pleasure
              to help you.
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <div class="input-box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="user_name"
                ></input>
              </div>
              <div class="input-box">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="user_email"
                ></input>
              </div>
              <div class="input-box">
                <input
                  type="text"
                  placeholder="Enter your institute"
                  name="user_institute"
                ></input>
              </div>
              <div class="input-box message-box">
                <textarea name="message" placeholder="Enter Your Message" />
              </div>
              <div class="button">
                <input type="submit" value="Send"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
