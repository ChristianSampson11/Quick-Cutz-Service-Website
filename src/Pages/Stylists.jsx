import React from "react";
import "./Stylists.css";
import Navbar from "../Components/NavBar";
import BottomBorder from "../Components/Contact";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Stylists() {
  const stylists = [
    {
      name: "Chris",
      specialty: "Mens, Womens, and Kidz Stylist",
      bio: "Chris is a stylist professional carrying over 10 years of experience. He has styled hair in Europe before joining the team, and loves to strike up a good conversation during his cutz!",
      image: "../public/assets/Chris.jpg"
    },
    {
      name: "Amelia",
      specialty: "Womens and Kidz Stylist",
      bio: "Amelia is a friendly stylist who is continuously building her hairdressing portfolio. Graduating top of her class from Ottawa's premiere stylist university, she can make any style look amazing!",
      image: "../public/assets/Amelia.jpg"
    },
    {
      name: "Tanya",
      specialty: "Beard, Design, Mens, Womens and Kidz Stylist",
      bio: "Tanya is a designer connoisseur, beard expert, masterful womens stylist, and serves as Quick Cutz's in-house mentor. If you want to try something new, Tanya has you covered!",
      image: "../public/assets/Tanya.jpg"
    },
  ];

  return (
    <section className="stylists" id="stylists">
      <div className="stylists-page">
        <Navbar />

        {/* Hero Section */}
        <section className="stylists-hero">
          <Container>
            <h1 className="stylists-title">Our Stylists</h1>
            <p className="stylists-subtitle">
              Meet the talented professionals behind your next great look!
            </p>
          </Container>
        </section>

        {/* Stylists Grid */}
        <section className="stylists-list">
          <Container>
            <Row className="justify-content-center g-4">
              {stylists.map((stylist, index) => (
                <Col key={index} xs={12} sm={6} md={4} className="stylist-col">
                  <div className="stylist-card">

                    {/* Image */}
                    <div className="stylist-image-wrapper">
                      <img
                        src={stylist.image}
                        alt={stylist.name}
                        className="stylist-image"
                      />
                    </div>

                    {/* Text */}
                    <h3 className="stylist-name">{stylist.name}</h3>
                    <p className="stylist-specialty">{stylist.specialty}</p>
                    <p className="stylist-bio">{stylist.bio}</p>

                    {/* Optional Booking Button */}
                    {/* 
                    <button className="stylist-book-btn">
                      Book with {stylist.name.split(" ")[0]}
                    </button>
                    */}
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

export default Stylists;