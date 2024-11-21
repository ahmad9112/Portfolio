import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi Everyone, 
 I am <span className="purple">Saiyad Mohammad </span>
 a content creator based in <span className="purple">Bihar India.</span>
            <br />
            
            <br />
            I create videos on education, aiming to provide value and entertainment to my audience.With a passion for sharing knowledge.
            <br />
            <br />
            I started my YouTube journey to share my knowledge and experiences with the world.
            I hope you enjoy the content, and don't forget to like, comment, and subscribe!
           </p>
          {/* // <ul>
          //   <li className="about-activity">
          //     <ImPointRight /> Playing Games
          //   </li>
          //   <li className="about-activity">
          //     <ImPointRight /> Writing Tech Blogs
          //   </li>
          //   <li className="about-activity">
          //     <ImPointRight /> Travelling
          //   </li>
          // </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}> 
           "Content is not just king; it's the connection it creates."{" "}
          </p>
          <footer className="blockquote-footer">Saiyad Mohammad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
