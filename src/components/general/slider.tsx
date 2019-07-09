import React from "react";
import "./styles/slider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Slide = (props: any) => {
  return (
    <div className={props.design ? "slide active" : "slide"}>
      <div className="icon" onClick={props.close}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  );
};

export default Slide;
