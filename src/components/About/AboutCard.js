import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chinmay Anand Panda </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am Cloud and Automation Engineer.
            <br />
            I have completed Bachelor of Technology in Computer Science Engineering at Silicon Institute of Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
        

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Chinmay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
