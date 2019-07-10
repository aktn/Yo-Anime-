import React from "react";
import "./styles/slider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Spinner from "./spinner";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin: 5rem 1rem;
  flex-direction: column;
`;

const Video = styled.div`
  flex: 1;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 0px;
  height: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h2`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 3rem;
  text-decoration: none;
  color: #262728;
`;

const Info = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: space-between;
  border-bottom: 1px solid #909396;
`;

const Label = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex: 1;
  height: 40px;
  flex-wrap: wrap;
  font-family: aktiv-grotesk-extended, sans-serif;
  font-weight: 800;
  line-height: 100%;
`;

const Synopsis = styled.div`
  flex: 1;
  text-align: left;
  letter-spacing: 0.1em;
  padding-top: 1em;
  line-height: 3em;
`;

const Slide = (props: any) => {
  let item = props.spinner ? <Spinner /> : "";
  if (props.spinner == false && props.anime) {
    item = (
      <>
        <Video>
          <iframe
            src={
              `https://www.youtube.com/embed/` +
              props.anime.attributes.youtubeVideoId
            }
            width="900"
            height="440"
            frameBorder="0"
          />
        </Video>
        <Title>{props.anime.attributes.titles.en}</Title>
        <Info>
          <Label>Rating: {props.anime.attributes.averageRating}</Label>
          <Label>Episode: {props.anime.attributes.episodeCount}</Label>
        </Info>
        <Synopsis>{props.anime.attributes.synopsis}</Synopsis>
      </>
    );
  }

  return (
    <>
      <div className={props.design ? "slide active" : "slide"}>
        <div className="icon" onClick={props.close}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <Wrapper>{item}</Wrapper>
      </div>
    </>
  );
};

export default Slide;
