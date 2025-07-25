// src/components/AboutPage.js
import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './Common.css';
import img_1 from '../assets/SOLAR-PUMP.jpg';
import img_2 from '../assets/SOLAR-CHAKKI.png';

const teamMembers = [
  {
    name: 'Alice',
    role: 'Analyst',
    img: img_2,
  },
  {
    name: 'Bob',
    role: 'Superviser',
    img: img_2,
  },
  {
    name: 'Charlie',
    role: 'Manager',
    img: img_2,
  },
];

const About = () => {
  return (
    <Container className="my-5 about-page">
      <h1 className="text-center mb-4 fade-in-down">About Us</h1>
      <p className="text-center mb-5 fade-in-up">
        We are a creative team passionate about building beautiful and responsive web applications.
      </p>

      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src={img_1}
            rounded
            fluid
            alt="Team working"
            className="shadow-lg fade-in-left"
          />
        </Col>

        <Col md={6}>
          <Card className="p-4 border-0 shadow-sm bg-light fade-in-right">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                To deliver high-quality, scalable, and elegant web solutions that help businesses
                grow and succeed in the digital world.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 className="text-center mb-4 fade-in-bottom">Meet the Team</h2>
          <Row>
            {teamMembers.map(({ name, role, img }, idx) => (
              <Col md={4} className="text-center mb-4" key={idx}>
                <Image
                  src={img}
                  roundedCircle
                  width={120}
                  height={120}
                  className="mb-3 fade-in"
                  style={{ animationDelay: `${idx * 0.3}s` }}
                />
                <h5>{name}</h5>
                <p className="text-muted">{role}</p>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
