import React from "react";
import "./Break.css";

const Break = (props) => {
  return (
    <div>
      <button className="break-btn1" onclick={props.handleAddClick}>
        5
      </button>
      <button className="break-btn1" onclick={props.handleAddClick}>
        7
      </button>
      <button className="break-btn1" onclick={props.handleAddClick}>
        10
      </button>
      <button className="break-btn1" onclick={props.handleAddClick}>
        12
      </button>
    </div>
  );
};

export default Break;
