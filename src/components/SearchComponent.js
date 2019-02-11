import React from "react";

import "./SearchComponent.css";

const SearchComponent = props => {
  return (
    <div className="searchComponent__container">
      <h1 className="searchComponent__title">Enter a word (english)</h1>
      <form>
        <input
          type="text"
          value={props.rhymeWord}
          onChange={props.onRhymeWordChange}
        />
        <button type="button" onClick={props.onSearchClick}>
          SEARCH
        </button>
      </form>
      <div className="searchComponent__list">
        {props.foundRhymeWords.map((element, index) => (
          <div key={index}>
            <h3>{element.word}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
