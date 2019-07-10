import React from "react";
import "./styles/spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="double-bounce1" />
      <div className="double-bounce2" />
    </div>
  );
};

export default Spinner;
