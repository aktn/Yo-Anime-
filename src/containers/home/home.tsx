import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-evenly;
`;

const List = styled.div``;

const Item = styled.img`
  min-width: 400px;
  max-width: 500px
  min-height: 400px;
  max-height: 500px
  margin: 10px 4px;
  object-fit: cover !important;
  @media screen and (min-width: 768px){
    width: 300px;
    height: 300px;
    margin: 5px;
  }
`;

export const Home = () => {
  const [data, setAnime] = useState([]);

  useEffect(() => {
    fetch("https://kitsu.io/api/edge/anime")
      .then(response => response.json())
      .then(data => setAnime(data.data));
  });

  return (
    <Container>
      {data.map((anime: any) => (
        <List key={anime.id}>
          <Item src={anime.attributes.posterImage.medium} />
        </List>
      ))}
    </Container>
  );
};

export default Home;
