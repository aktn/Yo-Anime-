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
  min-width: 140px;
  max-width: 300px
  min-height: 100px;
  max-height: 200px
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

  async function getAnime() {
    const response = await fetch(
      "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0"
    );
    const data = await response.json();
    setAnime(data.data);
  }

  useEffect(() => {
    getAnime();
  }, []);

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
