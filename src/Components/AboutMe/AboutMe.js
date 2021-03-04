import React from 'react';
import { Col, Row } from '../Grid/Grid';
import headshot from "../Images/head_shot.jpeg"

const AboutMe = () => {
  return (
    <Row>
      <Col size="md-12">
        <img src={headshot} alt="headshot" className="head-shot img-fluid float-left mr-3"></img>
        <p> I want to make as much of a positive impact in the world as possible with
        enthusiasm,
        humor, empathy, and innovation.
        This is my personal mission statement that guided me from my career with Siemens
        that
        took me through 5 different technical and business roles in 4 cities and 2 countries
        in
        6 years to my volunteering experiences with non-profits and startup efforts.
        </p>
        <p>Through these experiences, I’ve wore many hats such as process and product engineer,
        product and project manager, serviceability manager, business analyst, non-profit
        organization chapter president, consultant, and board member. As a result, I have a
        unique ability to move between seeing the big, strategic picture and at the same
        time
        understanding how to execute the implementation of an idea from inception to
        reality.
        </p>
      </Col>
    </Row>
  )
}

export default AboutMe
