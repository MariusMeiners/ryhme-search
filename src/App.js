import React from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";

import SearchContainer from "./container/SerachContainer";

const App = () => {
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={animationProps} className="App">
      <SearchContainer />
    </animated.div>
  );
};

export default App;
