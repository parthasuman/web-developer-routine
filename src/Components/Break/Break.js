import React from "react";

const Break = (props) => {
  return (
    <div>
      <button onclick={props.handleAddClick}>5</button>
      <button onclick={props.handleAddClick}>7</button>
      <button onclick={props.handleAddClick}>10</button>
      <button onclick={props.handleAddClick}>12</button>
    </div>
  );
};

export default Break;
