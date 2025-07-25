import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
    {
        name: 'Lewis Johnson',
        title: 'Marketing Director',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        quote: 'This service exceeded all expectations. Professional, fast, and reliable!',
    },
    {
        name: 'Marks Stonis',
        title: 'CEO, Techify',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        quote: 'Our productivity has increased thanks to this amazing tool!',
    },
    {
        name: 'Elflas Semi',
        title: 'UX Designer',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        quote: 'Clean design and easy to use. Highly recommended!',
    },
];

const Test = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="container-fluid" style={{ backgroundColor: 'rgba(240, 240, 240, 0.8)' }}>
            <div className="container py-5 background_imgae" id="testimonials" >
                <h2 className="text-center mb-2">What Our Clients Say</h2>
                <p className="para-p text-muted justify-content-center text-center align-items-center">Hear from our valued partners across the leggings supply chain — from trusted suppliers and global buyers to innovative manufacturers — who rely on our seamless service and product quality.</p>
                <div className="row g-4">
                    {testimonials.map((t, index) => (
                        <div className="col-md-4" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                            <div className="card h-100 shadow-lg border-0">
                                <div className="card-body text-center">
                                    <img src={t.image} alt={t.name} className="rounded-circle mb-3" width="80" height="80" />
                                    <h5 className="card-title py-2">{t.name}</h5>
                                    <h6 className="text-muted">{t.title}</h6>
                                    <p className="card-text mt-3">"{t.quote}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Test;