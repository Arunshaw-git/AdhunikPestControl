import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about-wrapper">
                    
                    <div className="about-image" data-aos="fade-right">
                        <img src="/assets/images/indian-pest-control-team.jpg" alt="Adhunik Pest Control Team" />
                        <div className="experience-badge">
                            <span>10+</span>
                            <p>Years Exp</p>
                        </div>
                    </div>

                    <div className="about-content" data-aos="fade-left">
                        <h2 style={{color:"var(--primary)"}}>Our Mission & Vision</h2>
                        <p>The mission of Adhunik Pest Control in Kolkata is to provide the best pest control services to everyone in need. We are one of the most trusted providers for pest control, cleaning, sanitization, and disinfecting services in Kolkata.</p>
                        <p>We pride ourselves on using state-of-the-art technology accompanied by highly qualified personnel to rid your environment of infectious and damaging pests permanently.</p>
                        
                        <div className="mission-box">
                            <h4>Why Trust Us?</h4>
                            <p>Thousands of homes and major enterprises across Bengal rely on our deep expertise. From minor household treatments to large-scale commercial implementations, our pledge remains the same: Absolute Quality.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
