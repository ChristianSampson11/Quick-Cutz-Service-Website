import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-column">
          <h3>CONTACT US</h3>

          <p>1364 Killarney Beach Rd</p>
          <p>Lefroy, Ontario</p>
          <p>L0L 1W0</p>
          <p>(705) 290-4247
          </p>
        </div>

        {/* CENTER */}
        <div className="contact-column">
          <h3>HOURS</h3>

          <p>Mon - Wed: 9:00am - 6:00pm</p>
          <p>Thurs - Fri: 8:00am - 4:00pm</p>
          <p>Sat: 10:00am - 5:00pm</p>
          <p>Sun: CLOSED</p>
        </div>

        {/* RIGHT */}
        <div className="contact-column">
          <h3>SOCIAL MEDIA</h3>

          <div className="social-icons">
            <img src="/assets/facebook.png" alt="Facebook" />
            <img src="/assets/instagram.png" alt="Instagram" />
            <img src="/assets/tiktok.png" alt="TikTok" />
            <img src="/assets/TripAdvisor.png" alt="Tripadvisor" />
          </div>
        </div>

      </div>

      {/* bottom bar */}
      <div className="contact-bottom">
        <p>© {new Date().getFullYear()} Quick Cutz. All rights reserved.</p>
      </div>

    </section>
  );
}