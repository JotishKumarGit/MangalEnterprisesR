import React, { useState } from 'react';

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // 👉 In real app, send email to backend or Mailchimp API
        console.log('Subscribed Email:', email);
        setSubmitted(true);
        setEmail('');
    };

    return (
        <div className="container-fluid py-5" style={{ backgroundColor: '#bac0c5ff' }}>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="p-5 rounded bg-light shadow">
                            <h3 className="text-center mb-4">📬 Subscribe to Our Newsletter</h3>
                            <p className="text-center text-muted mb-4">
                                Stay updated with our latest news, offers, and insights. No spam, ever.
                            </p>
                            <form onSubmit={handleSubmit} className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" className="btn btn-primary">
                                    Subscribe
                                </button>
                            </form>
                            {submitted && (
                                <div className="alert alert-success mt-4 text-center" role="alert">
                                    ✅ Thank you for subscribing!
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;