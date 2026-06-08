import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-overlay">

                <div className="about-content">

                    <h1 className="about-title">
                        Quick Cutz
                    </h1>

                    <p className="about-subtitle">
                        Your premier local hairdresser with unbeatable prices! <br />
                        Proudly serving the community of South Simcoe for over 5 years!
                    </p>

                    <div className="section-buttons">

                        <div className="section-row">
                            <Link to="/Book" className="book-btn">
                                Book Your Next Appointment!
                            </Link>

                            <Link to="/Stylists" className="book-btn">
                                Get To Know Our Stylists!
                            </Link>
                        </div>

                        <div className="section-row-center">
                            <Link to="/Services" className="book-btn secondary">
                                Find Your Next Style!
                            </Link>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
}