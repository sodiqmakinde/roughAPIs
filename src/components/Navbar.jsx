import React from "react";
import styled from "styled-components";

const Navbar = ({ fawazClick }) => {
  return (
    <Navigations>
      <nav className="container">
        <h3>Where in the World</h3>

        <p
          onClick={(e) => {
            fawazClick(e);
          }}
        >
          <span class="material-symbols-outlined">dark_mode</span> Dark Mode
        </p>
      </nav>
    </Navigations>
  );
};

export default Navbar;

let Navigations = styled.header`
  background-color: var(--White);
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  nav {
    justify-content: space-between;
    display: flex;
    padding: 20px 0;
    align-items: center;
  }

  p {
    span {
      position: relative;
      top: 6px;
      margin-right: 3px;
    }
  }
`;
