import React from 'react';

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Why Choose Adhunik?</h2>
                    <p>We redefine pest control with reliability, safety, and guaranteed results tailored perfectly for your space.</p>
                </div>
                
                <div className="why-grid">
                    
                    <div className="why-card" data-aos="fade-up" data-aos-delay="100">
                        <div className="why-icon"><i className="fa-solid fa-user-tie"></i></div>
                        <div className="why-content">
                            <h3>Experienced Professionals</h3>
                            <p>Our technicians are highly trained, background-checked, and knowledgeable.</p>
                        </div>
                    </div>

                    <div className="why-card" data-aos="fade-up" data-aos-delay="200">
                        <div className="why-icon"><i className="fa-solid fa-leaf"></i></div>
                        <div className="why-content">
                            <h3>Safe & Eco-Friendly</h3>
                            <p>We use Govt. approved chemicals that are safe for pets, children, and you.</p>
                        </div>
                    </div>

                    <div className="why-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="why-icon"><i className="fa-solid fa-certificate"></i></div>
                        <div className="why-content">
                            <h3>FSSAI-Compliant</h3>
                            <p>Strict adherence to safety norms, making us ideal for restaurants and food lines.</p>
                        </div>
                    </div>

                    <div className="why-card" data-aos="fade-up" data-aos-delay="400">
                        <div className="why-icon"><i className="fa-solid fa-award"></i></div>
                        <div className="why-content">
                            <h3>Up to 3 Yrs Warranty</h3>
                            <p>Guaranteed treatments with complimentary visits if the pests return.</p>
                        </div>
                    </div>

                    <div className="why-card" data-aos="fade-up" data-aos-delay="500">
                        <div className="why-icon"><i className="fa-solid fa-wallet"></i></div>
                        <div className="why-content">
                            <h3>Affordable Pricing</h3>
                            <p>Premium quality services at prices that fit perfectly within your budget.</p>
                        </div>
                    </div>

                    <div className="why-card" data-aos="fade-up" data-aos-delay="600">
                        <div className="why-icon"><i className="fa-solid fa-bolt"></i></div>
                        <div className="why-content">
                            <h3>Quick Response Time</h3>
                            <p>We value your time. Same day or next day priority bookings available.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
