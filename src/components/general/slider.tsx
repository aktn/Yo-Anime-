import React from "react";
import "./styles/slider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Spinner from "./spinner";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  position: absolute;
`;

const Slide = (props: any) => {
  let item = props.spinner ? <Spinner /> : "";
  if (props.spinner == false && props.anime) {
    item = props.anime.attributes.youtubeVideoId;
  }

  return (
    <>
      <div className={props.design ? "slide active" : "slide"}>
        <div className="icon" onClick={props.close}>
          <FontAwesomeIcon icon={faTimes} />
          <Wrapper>{item}</Wrapper>
        </div>
      </div>
    </>
  );
};

export default Slide;
