function Navbar({ setPage }) {
  return (
    <header>
      <div className="container logo">Skill<span>Match</span></div>
      <nav className="container">
        <a href="#" onClick={() => setPage("home")}>Home</a>
        <a href="#" onClick={() => setPage("jobs")}>Jobs</a>
        <a href="#" onClick={() => setPage("companies")}>Companies</a>
        <a href="#" onClick={() => setPage("about")}>About</a>
        <a href="#" className="btn" onClick={() => setPage("login")}>Login</a>
      </nav>
    </header>
  );
}

export default Navbar;
