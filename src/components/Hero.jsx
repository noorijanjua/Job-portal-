function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>Find Your <span>Dream Job</span> Today</h1>
          <p>Search thousands of job listings and connect with top companies hiring now.</p>
          <div className="search-box">
            <input type="text" placeholder="Job title or keyword" />
            <input type="text" placeholder="Location" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
