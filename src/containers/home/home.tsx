import React, { useState, useEffect, lazy, Suspense } from "react";
import styled from "styled-components";
import Slide from "../../components/general/slider";
import Spinner from "../../components/general/spinner";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`;

const List = styled.div`
  position: relative;
`;

const Item = styled.img`
  min-width: 150px;
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

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value changes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

export const Home = (props: any) => {
  // For list of animes on initial render
  const [animes, setAnime] = useState([]);

  // Spinner 1 for loading list of animes
  const [spinner1, setSpinner1] = useState(true);

  // Set a particular anime's ID after selection
  const [animeID, setAnimeID] = useState();

  // Set the slider's status
  const [sliderActive, setSliderStatus] = useState({ open: false });

  // Activate slide
  const displaySlide = (id: string) => {
    const slideStatus = sliderActive.open;
    setSliderStatus({ open: !slideStatus });
    if (!sliderActive.open) setAnimeID(id);
  };

  // Spinner two for loading modal slide
  const [spinner2, setSpinner2] = useState();
  // Retrieve anime by selected ID
  const [animeDetails, setAnimeDetails] = useState({});
  async function getAnimeDetails() {
    const response = await fetch(`https://kitsu.io/api/edge/anime/${animeID}`);
    const data = await response.json();
    setAnimeDetails(data.data);
    setSpinner2(false);
  }
  useEffect(() => {
    // Only load the data if an ID exits
    if (animeID) {
      setSpinner2(true);
      getAnimeDetails();
    }
  }, [animeID]);

  // Retrieve a list of trending animes
  async function getAnime() {
    const response = await fetch("https://kitsu.io/api/edge/trending/anime");
    const data = await response.json();
    setAnime(data.data);
    setSpinner1(false);
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

  // Only call the latest input from the user
  const debouncedSearchTerm = useDebounce(props.query, 500);

  // Search anime by text input
  async function searchAnime(query: string) {
    const response = await fetch(
      `https://kitsu.io/api/edge/anime?filter[text]=${query}`
    );
    const data = await response.json();
    setAnime(data.data);
    setSpinner1(false);
  }
  useEffect(() => {
      // if search term exists
    if (debouncedSearchTerm) {
      setAnime([]);
      setSpinner1(true);
      searchAnime(debouncedSearchTerm);
    } else if (debouncedSearchTerm == "") {
      setAnime([]);
      setSpinner1(true);
      getAnime();
    }
  }, [debouncedSearchTerm]);

  // const Slide = React.lazy(() => import("../../components/general/slider"));

  return (
    <Container>
      {spinner1 ? <Spinner /> : ""}
      {animes.map((anime: any) => (
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
      <Slide
        spinner={spinner2}
        design={sliderActive.open}
        anime={animeDetails}
        close={closeSlide}
      />
    </Container>
  );
};

export default Home;
