// Product.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import './Common.css';

import img_1 from '../assets/SOLAR-CHAKKI.png';
import img_2 from '../assets/SOLAR-PUMP.jpg';
import img_3 from '../assets/SOLAR-STREET-LIGHT.jpg';
import img_4 from '../assets/On-Grid-Off-Grid.jpg';
import img_5 from '../assets/OFF-GRID-SOLAR-SYSTEM.webp';
import img_6 from '../assets/How-Hybrid-Solar-System.webp';

const products = [
    {
        id: 1,
        title: 'Solar Chakki',
        image: img_1,
        description: 'Environment-friendly solar-powered chakki ideal for rural and off-grid areas. Efficient, cost-saving grain grinding solution.',
    },
    {
        id: 2,
        title: 'Solar Water Pump',
        image: img_2,
        description: 'Reliable solar-powered water pump system designed for agriculture and irrigation. Operates efficiently with zero fuel costs.',
    },
    {
        id: 3,
        title: 'Solar Street Light',
        image: img_3,
        description: 'Automatic solar street light with dusk-to-dawn feature. Ideal for streets, parks, and remote areas.',
    },
    {
        id: 4,
        title: 'On-Grid & Off-Grid Solar System',
        image: img_4,
        description: 'Complete on-grid and off-grid solar system solutions. Choose based on your energy needs and backup requirements.',
    },
    {
        id: 5,
        title: 'Off-Grid Solar System',
        image: img_5,
        description: 'Standalone off-grid solar system perfect for remote locations without electricity access. Provides reliable and sustainable power.',
    },
    {
        id: 6,
        title: 'Hybrid Solar System',
        image: img_6,
        description: 'Advanced hybrid solar system combining grid and battery power. Ensures uninterrupted electricity and energy savings.',
    },
];

const Product = () => {
    const [showPreview, setShowPreview] = useState(false);
    const [showEnquiry, setShowEnquiry] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handlePreviewShow = (product) => {
        setSelectedProduct(product);
        setShowPreview(true);
    };

    const handlePreviewClose = () => {
        setShowPreview(false);
        setSelectedProduct(null);
    };

    const handleEnquiryOpen = (product) => {
        setSelectedProduct(product);
        setShowEnquiry(true);
    };

    const handleEnquiryClose = () => {
        setShowEnquiry(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        const phone = '+917073012991';
        const text = `Product: ${selectedProduct?.title}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
        const WaLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        window.open(WaLink, "_blank");
        console.log("data is passed to WhatsApp");

        // Reset form and close modal
        setName('');
        setEmail('');
        setMessage('');
        setShowEnquiry(false);
    };

    return (
        <div className="container-fluid bg-light py-3">
            <Container className="my-5 " style={{ backgroundColor: 'light' }}>
                <h4 className="text-center text-danger">Carpet & Rugs Collection</h4>
                <h2 className="text-center fw-bold mb-4">OUR PRODUCT</h2>
                <Row>
                    {products.map((product) => (
                        <Col md={4} sm={6} xs={12} key={product.id} className="mb-4">
                            <Card className="product-card h-100">
                                <div className="image-wrapper">
                                    <img src={product.image} alt={product.title} className="product-image" />
                                </div>
                                <Card.Body className="text-center">
                                    <Card.Title className="fw-semibold">{product.title}</Card.Title>
                                    <Button className='me-3' variant="dark" size="sm" onClick={() => handlePreviewShow(product)}>
                                        View Details
                                    </Button>
                                    <Button variant="dark" size='sm' onClick={() => handleEnquiryOpen(product)}>
                                        Enquiry
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Product Preview Modal */}
                {selectedProduct && (
                    <Modal show={showPreview} onHide={handlePreviewClose} centered size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedProduct.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="text-center">
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.title}
                                className="img-fluid mb-3"
                                style={{ maxHeight: '400px', objectFit: 'cover' }}
                            />
                            <p className="text-muted">{selectedProduct.description}</p>
                            <Button variant="outline-primary" onClick={() => handleEnquiryOpen(selectedProduct)}>
                                Enquiry
                            </Button>
                        </Modal.Body>
                    </Modal>
                )}

                {/* Enquiry Modal */}
                <Modal show={showEnquiry} onHide={handleEnquiryClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Product Enquiry</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="enquiryName" className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="enquiryEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="enquiryMessage" className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder={`I'm interested in ${selectedProduct?.title}`} value={message} onChange={(e) => setMessage(e.target.value)} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Send Enquiry
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
};

export default Product;
