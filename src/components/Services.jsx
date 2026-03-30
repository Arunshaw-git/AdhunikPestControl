import React from 'react';

const servicesData = [
    {
        id: 1,
        title: "Termite Treatment",
        description: "Protect your valuable wooden structures and furniture with our deep-penetrating termite eradication protocols.",
        icon: "fa-solid fa-bug",
        image: "/assets/images/services/termite.png",
        delay: "100"
    },
    {
        id: 2,
        title: "Cockroach Control",
        description: "Odorless gel treatments targeting cockroach colonies in kitchens and pantries without emptying out the cupboards.",
        icon: "fa-solid fa-kitchen-set",
        image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dc4a7?auto=format&fit=crop&q=80&w=1000",
        delay: "200"
    },
    {
        id: 3,
        title: "Bedbug Treatment",
        description: "Thorough inspection and specialized chemical sprays to ensure your bedrooms are free from bedbugs completely.",
        icon: "fa-solid fa-bed",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
        delay: "300"
    },
    {
        id: 4,
        title: "Mosquito Control",
        description: "Thermal fogging and surface sprays targeting breeding grounds to protect your family from dengue and malaria.",
        icon: "fa-solid fa-mosquito",
        image: "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=1000",
        delay: "400"
    },
    {
        id: 5,
        title: "Rodent Control",
        description: "Strategic trapping and baiting solutions to keep your premises free from rats, mice, and the diseases they carry.",
        icon: "fa-solid fa-shield-virus",
        image: "https://images.unsplash.com/photo-1581579186913-45ac3e6dedbd?auto=format&fit=crop&q=80&w=1000",
        delay: "500"
    },
    {
        id: 6,
        title: "Commercial Services",
        description: "Customized, FSSAI-compliant pest control plans for offices, hotels, hospitals, and industrial warehouses.",
        icon: "fa-solid fa-building",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
        delay: "600"
    }
];

const Services = () => {
    return (
        <section id="services" className="bg-light">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Our Premium Services</h2>
                    <p>We provide comprehensive pest control tailored directly to your environmental needs, ensuring complete peace of mind.</p>
                </div>
                
                <div className="services-grid">
                    {servicesData.map((service) => (
                        <div key={service.id} className="service-card" data-aos="fade-up" data-aos-delay={service.delay}>
                            <div className="service-bg" style={{ backgroundImage: `url(${service.image})` }}></div>
                            <div className="service-overlay"></div>
                            <div className="service-content">
                                <div className="service-icon"><i className={service.icon}></i></div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <a href="#contact" className="service-link">Learn More <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
