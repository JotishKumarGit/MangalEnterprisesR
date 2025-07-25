import React from 'react';

const Footer = () => {
    return (
        <footer className="text-light pt-5 pb-3" style={{ backgroundColor: '#2A3E4C' }}>
            <div className="container">
                <div className="row">

                    {/* About Section */}
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">Mangal Enterprises</h5>
                        <p>
                            Welcome to Mangal Enterprises, your trusted partner in sustainable energy solutions. We specialize in delivering high-quality solar systems and innovative solar-powered products designed to power homes, businesses, and communities.
                        </p>
                        <div>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light me-3">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light me-3">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-light">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    {/* Important Links 1 */}
                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bold">IMPORTANT LINKS</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none">Home</a></li>
                            <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Gallery</a></li>
                        </ul>
                    </div>

                    {/* Important Links 2 */}
                    <div className="col-md-2 mb-4">
                        <h6 className="fw-bold">Services</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none">We Supplier</a></li>
                        </ul>
                    </div>

                    {/* Corporate Address */}
                    <div className="col-md-4 mb-4">
                        <h6 className="fw-bold">CORPORATE ADDRESS</h6>
                        <p>
                            <i className="bi bi-geo-alt-fill me-2"></i>
                            SHOP GROUND FLOOR, PLOT NO.2, VIJAY SINGH PATHIK NAGAR, Kalwar Road , Jhotwara, Overhead Tank, Jhotwara, Jaipur, Jaipur, Rajasthan
                        </p>
                        <p>
                            <i className="bi bi-telephone-fill me-2"></i>
                            Call Us: +91  7073012991
                        </p>
                        <p>
                            <i className="bi bi-envelope-fill me-2"></i>
                            Email: mangalenterprises@gmail.com
                        </p>
                    </div>

                </div>

                <hr style={{ borderColor: '#495e68' }} />

                <div className="text-center small">
                    ©Copyright 2025, All Right Reserved by Mangal Enterprises. Developed by <a href="https://trade4export.com/">Trade4Export</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;