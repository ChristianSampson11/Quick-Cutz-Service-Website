import "./Landing.css";

export default function Landing() {
  return (
    <section className="landing" id="landing">

      <div className="landing-container">

        {/* Text Title and description */}
        <div className="landing-text">
          <h2>About Us</h2>

          <p>
            Established in 2021 as the world began to re-open after the COVID-19 pandemic,
            Quick Cutz has been Simcoe's most reliable hairdresser, providing expert services
            at low, affordable prices for the community. Quick Cutz prides itself in tailoring its
            services to the needs of its customers, and the community of South Simcoe.
          </p>

          <p>
            Whether you already know exactly what you want, want to explore a new style, or just need
            a quick cut that looks great without paying today's competitve prices, Quick Cutz has something
            for you!
          </p>
        </div>

        {/* Image of Quick Cutz's location. */}
        <div className="landing-image">
          <img src="../public/assets/QuickCutzLocation.jpeg" alt="Image of Quick Cutz" />
        </div>

      </div>

    </section>
  );
}