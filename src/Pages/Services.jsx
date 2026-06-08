import React from "react";
import "./Services.css";
import Navbar from "../Components/NavBar";
import BottomBorder from "../Components/Contact";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

{ /* Text setup for the services offered at Quick Cutz */}
function Services() {
  const services = [
    { title: "Buzzcut", price: "$20", description: "Quick, cheap, and straight to the point.", icon: "/assets/buzzcut.png" },
    { title: "Kidz Cut", price: "$15", description: "Bring in your kidz during your appoitment, and Quick Cutz wil also have them leaving with an amazing, confident haircut!",  icon: "/assets/kidzcut.png" },
    { title: "Men's Haircut", price: "$25", description: "From fades, to taper fades, to middle parts, our stylists have something for every man who walks through the door!",  icon: "/assets/MensCut.png" },
    { title: "Women's Haircut", price: "$20", description: "Combined with the best rate in South Simcoe, come get a stylish Women's cut that'll make you look and feel amazing!",  icon: "/assets/WomensCut.png" },
    { title: "Hot Towel + Shave", price: "$50", description: "Add on a luxurious experience to your haircut, and let our stylists make your face look great too!",  icon: "/assets/HotTowel.png" },
    { title: "Additional Designs", price: "$10", description: "Lightning bolt? Initials? You name it, we'll design it!",  icon: "/assets/Additional.png" },
    { title: "Beard Shave/Trim", price: "$15", description: "We offer beard services! Professional shaving services at an affordable rate.",  icon: "/assets/Shave.png" },
  ];
  return (
    <section className="services" id="services">
      <div className="services-page">
        <Navbar />

{ /* Landing area for the services section page. */}
        <section className="services-hero">
          <Container>
            <h1 className="services-title">Our Services</h1>
            <p className="services-subtitle">
              Browse our premium expert hairstyling services!<br />
              There is something for everybody!
            </p>
          </Container>
        </section>

        {/* Grid containing the offered services. Layout supports all window sizes. */}
        <section className="services-list">
          <Container>
            <Row className="justify-content-center text-center g-4">
              {services.map((service, index) => (
                <Col
                  key={index}
                  xs={10}
                  sm={6}
                  md={4}
                  className="service-col">
                  <div className="service-card">
                  <div className="service-icon">
                    <img src={service.icon} alt={`${service.title} icon`} />
                  </div>

                    <h3 className="service-name">{service.title}</h3>

                    <p className="service-description">
                      {service.description || "Service description."}
                    </p>
                    <p className="service-price">{service.price}</p>
                  </div>
                </Col>
              ))}
            </Row>

            {/* CTA Card */}
            <div className="cta-card">
              <h2 className="cta-title">Ready to Book your appointment?</h2>
            <Link to="/book" className="cta-button">
            Book Your Appointment Here!
            </Link>
            </div>
          </Container>
        </section>

        <BottomBorder />
      </div>
    </section>
  );
}

export default Services;