import React from "react";

import "./ListItem.css";

const ListItem = props => (
  <div className="ListItem_container">
    <p className="ListItem_word">{props.word}</p>
    <p className="ListItem_score">
      Score: {props.score}
      {props.hasHighestScore ? " 🔥" : null}
    </p>
    <p className="ListItem_syllables">
      Syllables: {props.numSyllables}
      {props.hasHighestNumberOfSyllables ? " 🔥" : null}
    </p>
  </div>
);

export default ListItem;
