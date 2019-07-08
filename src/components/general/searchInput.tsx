import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div``;

const inputStyle = {
  width: "30vw",
  height: "1.5rem",
  outline: "0",
  borderWidth: "0 0 2px",
  fontSize: "14px"
};

const Icon = styled.span`
  padding-right: 10px;
  padding-top: 25px;
`;

const SearchInput = (props: any) => {
  return (
    <Wrapper>
      <Icon>
        <FontAwesomeIcon icon={faSearch} />
      </Icon>
      <input
        type="text"
        style={inputStyle}
        placeholder="Search..."
        onChange={props.searchString}
      />
    </Wrapper>
  );
};

export default SearchInput;
