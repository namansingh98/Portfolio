import { Button } from "@chakra-ui/react";
import React from "react";
import "./css/Home.css"


export default function Main() {
  return (
    <div>
      <div className="container">
        <div className="left">
<span>
          <h1>Hi. My name is <b> Naman</b>
        <b>  <span>Rathore</span></b> </h1>
         
          </span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem saepe mollitia quas placeat cum, molestiae delectus. Cumque est rerum voluptate </p>

        </div>
          <div className="right">
            <div className="exp">
              <h4>1 year</h4>
              <h5>experience</h5>
            </div>
          <img src="https://picsum.photos/200/150?grayscale"  alt="img"/>
          
        </div>

    </div>
    </div>
  );
}
