import React, { useState } from 'react';

const Navbar = ({ scrolled }) => {
    const [navActive, setNavActive] = useState(false);
    const toggleNav = () => setNavActive(!navActive);

    const navbarStyle = scrolled ? {
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
        background: 'rgba(255, 255, 255, 0.98)'
    } : {
        boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
        background: 'rgba(255, 255, 255, 0.95)'
    };

    return (
        <nav className="navbar relative" data-aos="fade-down" data-aos-duration="600" style={navbarStyle}>
            <div className="container">
                <a href="#" className="logo">
                    <img src="/assets/images/logo/adhunik-pest-corol-logo-2.png" alt="Adhunik Logo" style={{ height: '40px' }} />
                    Pest<span>Control</span>
                </a>
                
                <div className="mobile-toggle" onClick={toggleNav}>
                    <i className={`fa-solid ${navActive ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
                
                <div className={`nav-links ${navActive ? 'active' : ''}`}>
                    <a href="#hero">Home</a>
                    <a href="#services">Services</a>
                    <a href="#why-choose-us">Why Us</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <a href="tel:+918609380000" className="btn btn-primary"><i className="fa-solid fa-phone"></i> Call Now</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
