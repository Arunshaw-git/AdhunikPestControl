import React from 'react';

const FloatingButtons = () => {
    return (
        <div className="floating-buttons">
            <a href="https://wa.me/918609380000" target="_blank" rel="noreferrer" className="floating-btn btn-whatsapp">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="tel:+918609380000" className="floating-btn btn-call floating-call">
                <i className="fa-solid fa-phone"></i>
            </a>
        </div>
    );
};

export default FloatingButtons;
