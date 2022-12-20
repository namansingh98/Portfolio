import { Textarea, Box, Button } from "@chakra-ui/react";
import React, { useRef } from "react";
import "../Components/css/Footer.css"
import emailjs from "@emailjs/browser";
export default function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tu9iz0l",
        "template_tan6pov",
        form.current,
        "E5jfyEOisqrK0AWd-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="footer">
      <div className="git"><ion-icon name="mail-open-outline"></ion-icon><a href="https://github.com/namansingh98"> Github</a> </div>   
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
        <label className="email_id"><ion-icon name="mail-open-outline"></ion-icon> Email</label>
      <input type="email" name="from_email" placeholder="enter your email" />
          {/* <input type="submit" value="Send" className="btn" /> */}
          <button className="btn" type="submit" value="Send">Submit</button>
        </form>
      
      </div>
    </div>
  );
}
