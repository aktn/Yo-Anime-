import React, { useState, useEffect, lazy, Suspense } from "react";
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
  // For list of animes on initial render
  const [data, setAnime] = useState([]);

  // Set a particular anime's ID after selection
  const [animeID, setAnimeID] = useState();

  // Set the slider's status
  const [sliderActive, setSliderStatus] = useState({ open: false });

  // Activate slide
  const displaySlide = (id: any) => {
    const slideStatus = sliderActive.open;
    setSliderStatus({ open: !slideStatus });
    if (!sliderActive.open) setAnimeID(id);
  };

  // Retrieve anime by selected ID
  const [animeDetails, setAnimeDetails] = useState({});
  async function getAnimeDetails() {
    const response = await fetch(`https://kitsu.io/api/edge/anime/${animeID}`);
    const data = await response.json();
    setAnimeDetails(data.data);
  }
  useEffect(() => {
    // Only load the data if an ID exits
    if (animeID) {
      getAnimeDetails();
    }
  }, [animeID]);

  // Retrieve a list of animes
  async function getAnime() {
    const response = await fetch(
      "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0"
    );
    const data = await response.json();
    setAnime(data.data);
  }
  useEffect(() => {
    if (!sliderActive.open) {
      getAnime();
    }
  }, []);

  const closeSlide = () => {
    const slideStatus = sliderActive.open;
    setSliderStatus({ open: !slideStatus });
  };

  // const Slide = React.lazy(() => import("../../components/general/slider"));

  return (
    <Container>
      {data.map((anime: any) => (
        <List key={anime.id}>
          <Item
            src={anime.attributes.posterImage.medium}
            onClick={() => displaySlide(anime.id)}
          />
          <Overflow>
            <Title> {anime.attributes.titles.en} </Title>
          </Overflow>
        </List>
      ))}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Slide design={sliderActive.open} id={animeID} close={closeSlide} />
      </Suspense> */}
      <Slide design={sliderActive.open} id={animeID} close={closeSlide} />
    </Container>
  );
};

export default Home;
