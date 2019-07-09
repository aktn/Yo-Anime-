import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slide from "../../components/general/slider";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-evenly;
  width: 100%;
`;

const List = styled.div`
  position: relative;
`;

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
     5px 5px 0 1px #fff;
    border-radius: 20px;
  }  
  @media screen and (min-width: 800px){
    width: 300px;
    height: 300px;
    margin: 15px;
  }
`;

const Overflow = styled.div`
  display: inline-block;
  overflow: hidden;
  position: absolute;
  bottom: 10px;
  left: 20px;
  z-index: 2;
`;

const Title = styled.h3`
  font-weight: 700;
  color: #fff;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
`;

export const Home = () => {
  const [data, setAnime] = useState([]);

  const [sliderActive, setSliderStatus] = useState({ open: false });
  const displaySlide = () => {
    const slideStatus = sliderActive.open;

    setSliderStatus({ open: !slideStatus });
  };

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
          <Item
            src={anime.attributes.posterImage.medium}
            onClick={() => displaySlide()}
          />
          <Overflow>
            <Title> {anime.attributes.titles.en} </Title>
          </Overflow>
        </List>
      ))}
      <Slide design={sliderActive.open} close={displaySlide} />
    </Container>
  );
};

export default Home;
