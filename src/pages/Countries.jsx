import React, { useState } from "react";
import Navbar from "../components/Navbar";
import EachCountry from "../components/country/EachCountry";
import FortheClass from "../components/country/FortheClass";

const Countries = () => {
  const [darkMode, setDarkMode] = useState(false);
 

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark_theme" : "light-mode"}>
      <Navbar fawazClick={toggleMode} />
      {/* <EachCountry /> */}
      <FortheClass />
    </div>
  );
};

export default Countries;
