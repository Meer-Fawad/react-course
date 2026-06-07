import { useState, useEffect } from "react";
import "./App.css";

import Todo from "./components/Todo";
import Calculator from "./components/Calculator";

function App() {
  const [page, setPage] = useState("home");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const apps = [
    {
      name: "Todo App",
      desc: "Manage your daily tasks easily",
      img: "https://cdn-icons-png.flaticon.com/512/9068/9068758.png",
      page: "todo",
    },
    {
      name: "Calculator",
      desc: "Simple math calculator tool",
      img: "https://cdn-icons-png.flaticon.com/512/4257/4257483.png",
      page: "calculator",
    },
    {
      name: "Notes",
      desc: "Save your important notes",
      img: "https://cdn-icons-png.flaticon.com/512/3050/3050155.png",
      page: "notes",
    },
    {
      name: "Weather",
      desc: "Check live weather updates",
      img: "https://cdn-icons-png.flaticon.com/512/1116/1116453.png",
      page: "weather",
    },
    {
      name: "Music",
      desc: "Listen and enjoy music",
      img: "https://cdn-icons-png.flaticon.com/512/727/727245.png",
      page: "music",
    },
    {
      name: "Chat",
      desc: "Simple chat interface",
      img: "https://cdn-icons-png.flaticon.com/512/134/134914.png",
      page: "chat",
    },
    {
      name: "Timer",
      desc: "Countdown timer tool",
      img: "https://cdn-icons-png.flaticon.com/512/992/992700.png",
      page: "timer",
    },
    {
      name: "Gallery",
      desc: "View image gallery",
      img: "https://cdn-icons-png.flaticon.com/512/685/685655.png",
      page: "gallery",
    },
  ];

  const renderPage = () => {
    switch (page) {
      case "todo":
        return <Todo />;
      case "calculator":
        return <Calculator />;
      default:
        return (
          <div className="grid">
            {apps.map((app, i) => (
              <div key={i} className="card" onClick={() => setPage(app.page)}>
                <img src={app.img} alt={app.name} />
                <h3>{app.name}</h3>
                <p>{app.desc}</p>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <>
      <nav className="navbar">
        <h2 onClick={() => setPage("home")} className="logo">
          Dashboard
        </h2>
        <ul>
          <li>Home </li>
          <li>About </li>
          <li>Contact Us </li>
          <li>Visit </li>
        </ul>
        <button
          className="btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </nav>

      <div className="container">
        {page !== "home" && (
          <button className="back" onClick={() => setPage("home")}>
            ← Back
          </button>
        )}

        {renderPage()}
      </div>
    </>
  );
}

export default App;
