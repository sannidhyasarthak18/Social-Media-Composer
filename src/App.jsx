import { useEffect, useState } from "react";
import PostComposer from "./components/PostComposer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="app">
      <header className="header">

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <h1>🚀 Social Media Post Composer</h1>
            <p>
              Create engaging content with a modern, beautiful writing
              experience.
            </p>
          </div>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle Theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

      </header>

      <div className="container">
        <PostComposer />
      </div>
    </div>
  );
}

export default App;