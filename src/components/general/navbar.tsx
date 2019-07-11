import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  justify-content: flex-end;
  align-items: flex-end;
  a {
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
    color: #fff;
    text-decoration: none;
  }
`;

const Links = styled.ul`
  flex: 1;
  flex-wrap: wrap;
  li {
    display: inline-block;
    margin: 0 0 0 1.25rem;
    &:first-child {
      margin: 0;
    }
  }
`;

const Title = styled.p`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  color: #fff;
`;

const Navbar = (props: any) => {
  return (
    <Nav>
      <Title>Animeee</Title>
      <Links>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#" onClick={props.activateSearch}>
            {" "}
            Search
          </a>
        </li>
      </Links>
    </Nav>
  );
};

export default Navbar;
