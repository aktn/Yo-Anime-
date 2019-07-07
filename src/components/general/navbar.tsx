import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  a {
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
    color: #fff;
    text-decoration: none;
  }
`;

const Links = styled.ul`
  display: flex;
  justify-content: flex-start;
  li {
    display: inline-block;
    margin: 0 0 0 1.25rem;
    &:first-child {
      margin: 0;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Links>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Search</a>
        </li>
      </Links>
    </Nav>
  );
};

export default Navbar;
