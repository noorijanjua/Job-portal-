function Login({ setPage }) {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <span style={{ color: "#007bff", cursor: "pointer" }} onClick={() => setPage("signup")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
