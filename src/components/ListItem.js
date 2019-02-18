import React from "react";
import { useSpring, animated } from "react-spring";

import "./ListItem.css";

const ListItem = props => {
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div
      style={animationProps}
      className="ListItem_container"
      onClick={props.onClick}
    >
      <p className="ListItem_word">{props.word}</p>
      <p className="ListItem_score">
        Score: {props.score}
        {props.hasHighestScore ? " 🔥" : null}
      </p>
      <p className="ListItem_syllables">
        Syllables: {props.numSyllables}
        {props.hasHighestNumberOfSyllables ? " 🔥" : null}
      </p>
    </animated.div>
  );
};

export default ListItem;
