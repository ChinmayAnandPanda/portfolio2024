import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Chinmay Anand Panda</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} CAP</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            \
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/chinmay-anand-panda/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
