import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          SukhChobi
        </Link>{" "}
      </h1>
      <ul>
        <li>
          <Link to="/"> 1. About Us</Link>
        </li>
        <li>
          <Link to="/work"> 2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact"> 3. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #353535;
  a {
    color: whitesmoke;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 3rem;
    font-family: "Gloock", serif;
    font-weight: lighter;
    /* color: snow; */
    color: linear-gradient(20deg, hsl(60%, 60%, 65%), hsl(60%, 64%, 60%));
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
