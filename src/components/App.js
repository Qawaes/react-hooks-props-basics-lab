// src/components/App.js
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user"; // Import user data

function App() {
  const { name, city, color, bio, links } = user; // Destructure user data

  return (
    <div>
      <NavBar />
      <Home name={name} city={city} color={color} />
      <About bio={bio} links={links} />
    </div>
  );
}

export default App;
