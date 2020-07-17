import React from "react";

import ListItem from "./ListItem";
import "./SearchComponent.css";

const SearchComponent = (props) => {
  return (
    <div className="searchComponent__container">
      <h1 className="searchComponent__title">Enter a word you have in mind</h1>
      <h2 className="searchComponent__description">
        Have you ever felt stuck rapping 🎤 or writing that poem ✍️ to impress
        your crush?
        <br />
        <span> Struggle no longer.</span>
      </h2>
      <form className="searchComponent__form" onSubmit={props.onSearchClick}>
        <input
          type="text"
          value={props.rhymeWord}
          onChange={props.onRhymeWordChange}
        />
        <button type="submit">SEARCH</button>
        <div className="searchComponent__list">
          {props.foundRhymeWords.map((element, index) => (
            <ListItem
              onClick={() => {
                props.setRhymeWord(element.word);
              }}
              hasHighestScore={element.score === props.highestScore}
              hasHighestNumberOfSyllables={
                element.numSyllables === props.highestNumberOfSyllables
              }
              key={index}
              word={element.word}
              score={element.score}
              numSyllables={element.numSyllables}
            />
          ))}
        </div>
      </form>
      <p className="SearchComponent__hint">
        <span className="SearchComponent__hinttext">HINT: </span>
        <br />
        you can also enter names to create cool references to your favorite
        movies or brands.
      </p>
      <button
        className="SearchComponent__ratebutton"
        onClick={() => {
          alert("I had no time to do this yet 🙈");
        }}
      >
        RATE
      </button>
    </div>
  );
};

export default SearchComponent;
