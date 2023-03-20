import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Image1 from '../images/browser_icon_1.svg'
import Image2 from '../images/small_character_illustrations.svg'
import Image3 from '../images/rocket_green.svg'
import Image4 from '../images/Group2.png'

class TaskTexts extends Component {
  render() {
    return (
      <Container id="main">
        <Row className="px-4 my-5">
          <Col sm className="my-5">
            <Image className=" "src={Image4} fluid />
          </Col>
        </Row>

        <Row className="my-5 p-5">

          <Col sm className="mx-5">
            <Image src={Image1} />
          </Col>

          <Col sm className="my-5 mx-5">
            <h1 className="text-dark my-5">Stay organized</h1>
            <p className="text-dark-50 fs-4" >Keep track of all your tasks in one place and never forget an important deadline again. </p>
          </Col>

        </Row>

        <Row className="my-5 p-5">
          <Col sm className="mx-5 ">
            <Image src={Image2} />
          </Col>
          <Col sm className="my-5 mx-5">
          <h1 className="text-dark" >Collaborate with others </h1>
          <p className="text-dark-50 fs-4 my-5" >Share tasks and projects with colleagues, friends, or family members to work together and achieve your goals. </p>
          </Col>
        </Row>
        <Row className="my-5 p-5">
          <Col sm className="mx-5">
            <Image src={Image3} />
          </Col>
          <Col sm className="mx-5 my-5">
          <h1 className="text-dark" >Start organizing</h1>
          <p className="text-dark-50 fs-4 my-5">Whether you're a busy professional, a student, or just someone who wants to stay organized, our task management app is the perfect tool for you. Sign up now and start getting things done!</p>
          <Button variant="info" size="lg" > Sign Up</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default TaskTexts
