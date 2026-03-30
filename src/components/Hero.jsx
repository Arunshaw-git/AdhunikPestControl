import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="swiper hero-swiper">
                <div className="swiper-wrapper">
                    
                    <div className="swiper-slide hero-slide" style={{backgroundImage: "url('/assets/images/indian-pest-control-hero.jpg')"}}>
                        <div className="container">
                            <div className="slide-content" data-aos="fade-up" data-aos-delay="200">
                                <span className="slide-label">Premium Services</span>
                                <h1>Complete Pest Control Solutions for Homes & Businesses</h1>
                                <p>Protecting your spaces against termites, cockroaches, bedbugs, mosquitoes, and more.</p>
                                <ul className="slide-features">
                                    <li><i className="fa-solid fa-check-circle"></i> FSSAI-Compliant Solutions</li>
                                    <li><i className="fa-solid fa-check-circle"></i> Up to 3 Years Warranty</li>
                                </ul>
                                <div className="hero-buttons">
                                    <a href="#contact" className="btn btn-primary">Book Inspection</a>
                                    <a href="tel:+918609380000" className="btn btn-outline">Call Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide hero-slide" style={{backgroundImage: "url('/assets/images/indian-termite-control.jpg')"}}>
                        <div className="container">
                            <div className="slide-content">
                                <span className="slide-label">SpecializedBox</span>
                                <h1>Advanced Termite Control Services</h1>
                                <p>Eradicate termites from the root and protect your valuable wooden furniture and property.</p>
                                <div className="hero-buttons">
                                    <a href="#contact" className="btn btn-primary">Get Service</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide hero-slide" style={{backgroundImage: "url('/assets/images/indian-cockroach-control.jpg')"}}>
                        <div className="container">
                            <div className="slide-content">
                                <span className="slide-label">Hygiene Priority</span>
                                <h1>Effective Cockroach Management</h1>
                                <p>Safe, odorless and highly effective remedies for a clean and hygienic kitchen.</p>
                                <div className="hero-buttons">
                                    <a href="#contact" className="btn btn-primary">Get Service</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide hero-slide" style={{backgroundImage: "url('/assets/images/indian-mosquito-control.jpg')"}}>
                        <div className="container">
                            <div className="slide-content">
                                <span className="slide-label">Protect Your Family</span>
                                <h1>Mosquito & Bedbug Eradication</h1>
                                <p>Sleep peacefully and stay away from vector-borne diseases with our advanced fogging & spraying.</p>
                                <div className="hero-buttons">
                                    <a href="#contact" className="btn btn-primary">Get Service</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide hero-slide" style={{backgroundImage: "url('/assets/images/indian-commercial-pest-control.jpg')"}}>
                        <div className="container">
                            <div className="slide-content">
                                <span className="slide-label">B2B Services</span>
                                <h1>Commercial Pest Control Solutions</h1>
                                <p>Professional, FSSAI-compliant pest management for offices, restaurants, and warehouses.</p>
                                <div className="hero-buttons">
                                    <a href="#contact" className="btn btn-primary">Get Service</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
};

export default Hero;
