function Signup({ setPage }) {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Sign Up</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert("Signup submitted"); setPage("home"); }}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />

          <button className="btn" type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="#" onClick={() => setPage("login")}>Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
