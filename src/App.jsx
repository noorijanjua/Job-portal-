import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import Companies from "./components/Companies";
import About from "./components/About";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./style.css";

function App() {
  const [page, setPage] = useState("home"); 
  return (
    <div className="App">
      <Navbar setPage={setPage} />

      {page === "home" && <Hero />}
      {page === "jobs" && <Jobs />}
      {page === "companies" && <Companies />}
      {page === "about" && <About />}
      {page === "login" && <Login setPage={setPage} />}
      {page === "signup" && <Signup setPage={setPage} />}

      <Footer />
    </div>
  );
}

export default App;
