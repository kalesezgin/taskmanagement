import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="color-foot">
      <Container>
        <Row className="py-4">
          <Col md={4}>
            <h5>About Us</h5>
            <p>We are a team of developers passionate about creating useful and intuitive software to help people manage their tasks more efficiently.</p>
          </Col>
          <Col md={4}>
            <h5 >Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: kalesezgin@gmail.com</li>
              <li>Sezgin KALE</li>
              
            </ul>
          </Col>
          
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://github.com/kalesezgin">Github</a></li>
              <li><a href="https://www.linkedin.com/in/kalesezgin/">Linkedin</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row className="pb-4">
          <Col md={8}>
            <p>&copy; 2023 Task Manager. All rights reserved.</p>
          </Col>
          <Col md={4} className="text-right">
            <p>Created with React and Bootstrap</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;