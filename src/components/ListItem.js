import React from "react";

import "./ListItem.css";

const ListItem = props => (
  <div className="ListItem_container">
    <h3>{props.word}</h3>
  </div>
);

export default ListItem;
