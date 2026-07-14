function Jobs() {
  return (
    <section className="jobs">
      <div className="container">
        <h2>Featured Jobs</h2>
        <div className="job-list">
          <div className="job-card">
            <h3>Frontend Developer</h3>
            <p>Google - Islamabad</p>
            <span>Full-time</span>
            <button>Apply Now</button>
          </div>
          <div className="job-card">
            <h3>UI/UX Designer</h3>
            <p>Figma - Lahore</p>
            <span>Remote</span>
            <button>Apply Now</button>
          </div>
          <div className="job-card">
            <h3>Backend Engineer</h3>
            <p>Amazon - Karachi</p>
            <span>Full-time</span>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jobs;
