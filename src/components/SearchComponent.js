import React from "react";

import ListItem from "./ListItem";
import "./SearchComponent.css";

const SearchComponent = props => {
  return (
    <div className="searchComponent__container">
      <h1 className="searchComponent__title">Enter a word you have in mind</h1>
      <h2 className="searchComponent_description">
        Have you ever felt stuck rapping 🎤 or writing that poem ✍️ to impress
        your crush?
        <br />
        <span> Struggle no longer.</span>
      </h2>
      <form className="searchComponent_form">
        <input
          type="text"
          value={props.rhymeWord}
          onChange={props.onRhymeWordChange}
        />
        <button type="button" onClick={props.onSearchClick}>
          SEARCH
        </button>
        <div className="searchComponent__list">
          {props.foundRhymeWords.map((element, index) => (
            <ListItem key={index} word={element.word} />
          ))}
        </div>
      </form>
      <p>
        <span>HINT: </span>you can also enter names to create cool references to
        your favorite movies or brands.
      </p>
      <button>RATE</button>
    </div>
  );
};

export default SearchComponent;
