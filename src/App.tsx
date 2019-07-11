import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Home from "./containers/home/home";
import Navbar from "./components/general/navbar";
import styled from "styled-components";
import SearchInput from "./components/general/searchInput";

const SearchBar = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  min-height: 50px;
  max-height: 60px;
  height: 100%;

  &:before {
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }
`;

const App: React.FC = () => {
  const [searchActive, setSearchActive] = useState({ open: false });
  const displaySearch = () => {
    const searchBarStatus = searchActive.open;
    setSearchActive({ open: !searchBarStatus });
  };

  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <Navbar activateSearch={displaySearch} />
      {searchActive.open ? (
        <SearchBar>
          <SearchInput
            searchString={(text: any) => setQuery(text.target.value)}
          />
        </SearchBar>
      ) : (
        ""
      )}
      <Home query={query} />
    </div>
  );
};

export default App;
