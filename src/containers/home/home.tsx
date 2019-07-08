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
  cursor: pointer;
  background-color: #fff;
  transition-duration:2s;
  -webkit-transition-duration:0.5s;
  &:hover{ 
    transition: all 400ms cubic-bezier(.2,.88,.52,1);
    transform: translate(-1rem, -1rem);
     box-shadow:0 -5px 0 -5px #eee, 
     4px 4px 0 1px #fff;
    border-radius: 5px;
  }  
  @media screen and (min-width: 800px){
    width: 300px;
    height: 300px;
    margin: 15px;
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
