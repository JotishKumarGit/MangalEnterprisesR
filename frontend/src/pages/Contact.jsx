import React, { useEffect, useState } from 'react';
import AOS from 'aos';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // for send data on whatsapp
    const [data, setData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Craft the whatsapp url
        const phone = '+917073012991';
        const text = `name : ${data.name}%OAEmail: ${data.email}%OAMessage: ${data.message}`;
        const WaLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        // open whatsapp in a new tab
        window.open(WaLink, "_blank");
        console.log("data is passed to WhatsApp");
    }

    return (
        <>
            <div className='container-fluid'>
                <div className="container shadow-lg p-5 justify-content-center rounded" data-aos="fade-up">
                    <h2 className="text-center mb-3">Contacṭ Us</h2>
                    <p className='text-muted text-center para-p'>We’re here to help you find the perfect leggings solutions for your business. Whether you’re a supplier, buyer, or manufacturer, our team is ready to assist you with inquiries, orders, or custom requests.</p>
                    <div className="row g-4">
                        {/* Left Side: Map */}
                        <div className="col-md-6 mt-5">
                            <div className="shadow rounded overflow-hidden">
                                <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3507.0232121161807!2d77.51269967456656!3d28.478847591044772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sI-164%2C%20Ground%20Floor%2C%20Alpha%202%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20india%20201308!5e0!3m2!1sen!2sin!4v1753086754353!5m2!1sen!2sin" height="100%" width="100%" style={{ border: 0, minHeight: '400px' }} allowFullScreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                        {/* Right Side: Contact Form */}
                        <div className="col-md-6">
                            <div className="card p-4 shadow-lg">
                                <h3 className="text-primary fw-bold mb-3">Get in Touch</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label fw-semibold">Name</label>
                                        <input type="text" name='name' value={data.name} className="form-control" placeholder="Your name" onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label fw-semibold">Email</label>
                                        <input type="email" name='email' value={data.email} className="form-control" placeholder="name@example.com" onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label fw-semibold">Message</label>
                                        <textarea className="form-control" value={data.message} name='message' rows="4" placeholder="Your message..." onChange={handleChange} required></textarea>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact; 