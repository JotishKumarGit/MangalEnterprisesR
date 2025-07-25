import React from 'react';
import img_1 from '../assets/SOLAR-STREET-LIGHT.jpg';
import img_2 from '../assets/SOLAR-PUMP.jpg';
import img_3 from '../assets/SOLAR-CHAKKI.png';


function CarouselSections() {



    return (

        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img_1} className="d-block w-100" alt="..." style={{ height: '500px', objectFit: 'cover' }} />
                        {/* <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '10px', borderRadius: '5px' }}>
                            <h5>Premium Handmade & Machine-Made Rugs – Hand Tufted, Knotted & Shaggy Styles</h5>
                            <p>Discover a stunning collection of hand-tufted, hand-knotted, machine-made, and shaggy carpet rugs designed to enhance your living space.</p>
                        </div> */}
                    </div>
                    <div className="carousel-item">
                        <img src={img_2} className="d-block w-100" alt="..." style={{ height: '500px', objectFit: 'cover' }} />
                        {/* <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '10px', borderRadius: '5px' }}>
                            <h5>Luxury Carpet Collection – Hand-Knotted, Shaggy, Durries & More</h5>
                            <p>Elevate your home décor with our exclusive range of carpets and rugs — including handcrafted durries, soft shaggy rugs, intricately knotted designs, and precision machine-made options. </p>
                        </div> */}
                    </div>
                    <div className="carousel-item">
                        <img src={img_3} className="d-block w-100" alt="..." style={{ height: '500px', objectFit: 'cover' }} />
                        {/* <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '10px', borderRadius: '5px' }}>
                            <h5>Buy Hand Tufted & Machine Made Rugs Online – Traditional & Modern Designs</h5>
                            <p>Whether you prefer the charm of hand-knotted rugs, the softness of shaggy carpets, or the convenience of machine-made designs, our versatile rug collection offers something for every style and budget.</p>
                        </div> */}
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default CarouselSections;

