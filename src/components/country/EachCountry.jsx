import React, { useEffect, useState } from "react";
import styled from "styled-components";

const EachCountry = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <Country className=" container">
      {/* Hrer */}
      {countries.map((item, index) => (
        <div className="each">
          <img src={item.flags.png} alt="" />

          <h2>{item.name.common}</h2>
          <ul>
            <li>
              Population: <span>{item.population}</span>
            </li>
            <li>
              Continent: <span>{item.region}</span>
            </li>
            <li>
              Capital: <span>{item.capital}</span>
            </li>
          </ul>
        </div>
      ))}
    </Country>
  );
};

export default EachCountry;

let Country = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .each {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: 30px 0;
  }

  @media (min-width: 748px) {
    .each {
      width: 48%;
    }
  }

  @media (min-width: 1045px) {
    .each {
      width: 32%;
    }
  }

  @media (min-width: 1045px) {
    .each {
      width: 23%;
    }
  }
`;
