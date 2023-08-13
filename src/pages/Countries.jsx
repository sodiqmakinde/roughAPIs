import React, { useState } from "react";
import Navbar from "../components/Navbar";
import EachCountry from "../components/country/EachCountry";

const Countries = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark_theme" : "light-mode"}>
      <Navbar fawazClick={toggleMode} />
      <EachCountry />
    </div>
  );
};

export default Countries;
