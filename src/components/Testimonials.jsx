import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-light">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>What Our Clients Say</h2>
                    <p>Read about the experiences of families and businesses who trust Adhunik.</p>
                </div>
                
                <div className="swiper testimonial-swiper" data-aos="fade-up" data-aos-delay="200">
                    <div className="swiper-wrapper">
                        
                        <div className="swiper-slide">
                            <div className="testimonial-card">
                                <i className="fa-solid fa-quote-right quote-icon"></i>
                                <div className="stars">
                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                </div>
                                <p className="testimonial-text">"I was struggling with a huge termite issue in my apartment. Adhunik's team was prompt, professional, and solved the problem entirely. Highly recommended."</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">R</div>
                                    <div className="author-info">
                                        <h4>Rajesh Chatterjee</h4>
                                        <p>New Town, Kolkata</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="testimonial-card">
                                <i className="fa-solid fa-quote-right quote-icon"></i>
                                <div className="stars">
                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                </div>
                                <p className="testimonial-text">"The commercial pest control for our hotel was seamless and strictly FSSAI compliant. Not a single cockroach seen since their treatment."</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">S</div>
                                    <div className="author-info">
                                        <h4>Sneha Roy</h4>
                                        <p>Salt Lake, Kolkata</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="testimonial-card">
                                <i className="fa-solid fa-quote-right quote-icon"></i>
                                <div className="stars">
                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                </div>
                                <p className="testimonial-text">"Very affordable pricing for the quality they provide. Their bedbug treatment worked wonderfully with no residual smell in the house."</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">A</div>
                                    <div className="author-info">
                                        <h4>Anil Das</h4>
                                        <p>Park Street, Kolkata</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
