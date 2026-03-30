import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="bg-light">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Get In Touch</h2>
                    <p>Ready to secure your premises? Contact us today for a free quote or inspection.</p>
                </div>

                <div className="contact-grid">
                    
                    <div className="contact-info-wrapper" data-aos="fade-right">
                        <div className="contact-item">
                            <div className="contact-icon"><i className="fa-solid fa-location-dot"></i></div>
                            <div className="contact-item-info">
                                <h4>Visit Us</h4>
                                <p>Lane no 8, Gouranganagar, near Promodgarh Ward Office, Newtown, Kolkata, WB 700162</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon"><i className="fa-solid fa-envelope"></i></div>
                            <div className="contact-item-info">
                                <h4>Email Us</h4>
                                <p>adhunik.7501@gmail.com<br/>rdinfotech2016@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
                            <div className="contact-item-info">
                                <h4>Call Us</h4>
                                <p>+91 860938XXXX <br/><span style={{fontSize: "0.85em", color:"var(--primary)"}}>24/7 Support Available</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="map-container" data-aos="fade-left">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3683.472918451121!2d88.46231267597155!3d22.59879797947262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02753acfc9260d%3s0x64b819fbc7c01460!2sNew%20Town%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700412800000!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
