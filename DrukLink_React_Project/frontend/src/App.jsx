import { useEffect, useState } from "react";

const API_URL = "http://localhost:8080/api";

function App() {
  const [backendStatus, setBackendStatus] = useState("Checking...");

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then((response) => response.json())
      .then((data) => setBackendStatus(data.message))
      .catch(() => setBackendStatus("Backend is offline"));
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Druk<span>Link</span></div>

        <div className="navLinks">
          <a href="#home">Home</a>
          <a href="#jobs">Jobs</a>
          <a href="#people">People</a>
          <a href="#about">About</a>
        </div>

        <div className="actions">
          <button className="signIn">Sign in</button>
          <button className="signUp">Sign up</button>
        </div>
      </nav>

      <main className="hero" id="home">
        <section className="heroContent">
          <p className="eyebrow">BHUTAN'S PROFESSIONAL NETWORK</p>

          <h1>
            Connect. Work.
            <br />
            <span>Grow together.</span>
          </h1>

          <p className="description">
            DrukLink connects job seekers with employers and creates a trusted
            space to discover opportunities, skills and professional
            connections.
          </p>

          <div className="buttons">
            <button className="primary">Find opportunities</button>
            <button className="secondary">Post a job</button>
          </div>
        </section>

        <section className="statusCard">
          <p className="statusLabel">PROJECT STATUS</p>
          <h2>React + Go Setup</h2>

          <div className="statusRow">
            <span>React Frontend</span>
            <strong>Ready</strong>
          </div>

          <div className="statusRow">
            <span>Go Backend</span>
            <strong>Ready</strong>
          </div>

          <div className="statusRow">
            <span>API Connection</span>
            <strong className={backendStatus.includes("offline") ? "offline" : ""}>
              {backendStatus.includes("offline") ? "Offline" : "Connected"}
            </strong>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
