import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    
                    <div className="footer-about">
                        <a href="#" className="logo footer-logo">
                            <img src="/assets/images/logo/adhunik-pest-corol-logo-2.png" alt="Adhunik Logo" style={{ height: '40px' }} />
                            Pest<span>Control</span>
                        </a>
                        <p>The most trusted provider for pest control, cleaning, sanitization, and disinfecting services in Kolkata. Guarding your homes and enterprises securely.</p>
                        <div className="social-links">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services">Termite Control</a></li>
                            <li><a href="#services">Cockroach Control</a></li>
                            <li><a href="#services">Bedbug control</a></li>
                            <li><a href="#services">Mosquito Control</a></li>
                            <li><a href="#services">Commercial Service</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Office Address</h4>
                        <ul style={{color:"rgba(255,255,255,0.7)", lineHeight: "1.8"}}>
                            <li><i className="fa-solid fa-map-marker-alt" style={{color:"var(--primary)", marginRight: "10px"}}></i> Lane no 8, Gouranganagar, Newtown, Kolkata 700162</li>
                            <li><i className="fa-solid fa-phone" style={{color:"var(--primary)", marginRight: "10px"}}></i> +91 860938XXXX</li>
                            <li><i className="fa-solid fa-envelope" style={{color:"var(--primary)", marginRight: "10px"}}></i> adhunik.7501@gmail.com</li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} Adhunik Pest Control. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
