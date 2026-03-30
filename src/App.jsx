import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Initialize Swipers
        if (window.Swiper) {
            new window.Swiper('.hero-swiper', {
                loop: true,
                effect: 'fade',
                fadeEffect: { crossFade: true },
                speed: 1000,
                autoplay: { delay: 5000, disableOnInteraction: false },
                pagination: { el: '.swiper-pagination', clickable: true },
            });

            new window.Swiper('.testimonial-swiper', {
                loop: true,
                spaceBetween: 30,
                autoplay: { delay: 4000, disableOnInteraction: false },
                breakpoints: {
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        }

        // Initialize AOS
        if (window.AOS) {
            window.AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 100
            });
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Navbar scrolled={scrolled} />
            <Hero />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <Clients />
            <About />
            <Contact />
            <Footer />
            <FloatingButtons />
        </>
    );
}

export default App;
