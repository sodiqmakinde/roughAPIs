import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FortheClass = () => {
  const [countries, setCountries] = useState([]);
  const [initialSearch, setInitialSearch] = useState("");
  const [loading, setLoading] = useState(true);

  //   useEffect(
  //     () =>
  //       fetch("https://restcountries.com/v3.1/all")
  //         .then((res) => res.json())
  //         .then((data) => setCountries(data)),
  //     []
  //   );

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);

  const filterByCountry = countries.filter((country) =>
    country.region.toLowerCase().includes(initialSearch.toLowerCase())
  );

  return (
    <section>
      <input
        type="text"
        placeholder="countries"
        onChange={(e) => setInitialSearch(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div>
            {filterByCountry.length === 0 && initialSearch !== "" ? (
              <div>What you searched does not exist</div>
            ) : (
              <Country className="container">
                {filterByCountry.map((item, index) => (
                  <div className="each" key={index}>
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
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default FortheClass;

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
