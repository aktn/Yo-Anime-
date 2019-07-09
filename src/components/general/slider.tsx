import React, { useState, useEffect } from "react";
import "./styles/slider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Slide = (props: any) => {
  console.log(props.design);
  return (
    <div className={props.design ? "slide active" : "slide"}>
      <div className="icon" onClick={props.close}>
        <FontAwesomeIcon icon={faTimes} />
        {props.id}
      </div>
    </div>
  );
};

export default Slide;
