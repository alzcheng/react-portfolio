import React from 'react'
import AboutMe from '../Components/AboutMe/AboutMe'
import ContactMe from '../Components/ContactMe/ContactMe'
import { Col, Container, Row } from '../Components/Grid/Grid'

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-6">
            <Row>
              <Col size="md-12">
                <h1 className="about-me-title">About Me</h1>
              </Col>
            </Row>
            <AboutMe />
          </Col>
          <Col size="md-6">
            <ContactMe />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
