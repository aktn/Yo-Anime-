import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 50px;
  width: 100%;
`;

const List = styled.ul`
  display: flex;
`;

const Details = styled.li`
  flex: auto;
  min-width: 400px;
  list-style: none;
`;

export const Home = () => {
  const [data, setAnime] = useState([]);

  useEffect(() => {
    fetch("https://kitsu.io/api/edge/anime")
      .then(response => response.json())
      .then(data => setAnime(data.data));
  });

  return (
    <Wrapper>
      {data.map((anime: any) => (
        <List key={anime.id}>
          <Details>
            <img src={anime.attributes.posterImage.tiny} />
          </Details>
        </List>
      ))}
    </Wrapper>
  );
};

export default Home;
