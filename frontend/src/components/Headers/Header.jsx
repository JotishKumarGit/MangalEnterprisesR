import React, { useState } from 'react';
import { Row, Col, Navbar, Container, Offcanvas, Button, Nav, NavDropdown } from 'react-bootstrap';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import { TiThMenu } from 'react-icons/ti';

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* Top Bar */}
            <div className="bg-dark text-light py-2">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} sm={12}>
                            <small>
                                <strong>Opening Hours:</strong> Mon - Sat: 9.00 am - 9.00 pm, Sunday Closed
                            </small>
                        </Col>
                        <Col md={6} sm={12} className="text-md-end text-sm-start mt-sm-2 mt-md-0">
                            <small>
                                <MdOutlineMailOutline /> <strong>Email:</strong>{' '}
                                <a href="mailto:info@example.com" className="text-light">
                                    mangalenterprises@gmail.com
                                </a>{' '}
                                &nbsp;&nbsp;
                                <FaPhone /> <strong>Call:</strong>{' '}
                                <a href="tel:+1234567890" className="text-light">
                                    +91 7073012991
                                </a>
                            </small>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Bottom Navbar */}
            <div className="container-fluid px-0">
                <Navbar bg="light" expand={false}>
                    <Container fluid>
                        {/* Left: Logo */}
                        <Navbar.Brand href="#">   Mangal Enterprises</Navbar.Brand>

                        {/* Right: Hamburger Icon Button */}
                        <Button
                            variant="light"
                            onClick={handleShow}
                            className="border-0"
                            aria-label="Toggle menu"
                        >
                            <TiThMenu size={28} />
                        </Button>

                        {/* Offcanvas from right */}
                        <Offcanvas show={show} onHide={handleClose} placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="flex-column">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#about">About</Nav.Link>
                                    <NavDropdown title="Services" id="offcanvas-nav-dropdown">
                                        <NavDropdown.Item href="#action/1">Service 1</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/2">Service 2</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#contact">Contact</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default Header;