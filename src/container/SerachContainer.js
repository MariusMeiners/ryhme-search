import React from "react";

import { getListOfRhymeWordsForGivenWord } from "../api/searchApi";
import SearchComponent from "../components/SearchComponent";

export default class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rhymeWord: "",
      foundRhymeWords: [],
      highestScore: undefined,
      highestNumberOfSyllables: undefined,
    };
  }

  onSearchClick = async (event) => {
    event.preventDefault();
    const foundRhymeWords = await getListOfRhymeWordsForGivenWord(
      this.state.rhymeWord
    );
    const highestNumberOfSyllables = Math.max(
      ...foundRhymeWords.map((e) => e.numSyllables)
    );
    const highestScore = Math.max(...foundRhymeWords.map((e) => e.score));

    this.setState({ foundRhymeWords, highestScore, highestNumberOfSyllables });

    console.log(event);
  };

  onRhymeWordChange = (changeEvent) => {
    this.setState({ rhymeWord: changeEvent.target.value });
  };

  setRhymeWord = (rhymeWord) => {
    this.setState({ rhymeWord }, () => {
      this.onSearchClick();
    });
  };

  render() {
    return (
      <SearchComponent
        setRhymeWord={this.setRhymeWord}
        highestScore={this.state.highestScore}
        highestNumberOfSyllables={this.state.highestNumberOfSyllables}
        foundRhymeWords={this.state.foundRhymeWords}
        rhymeWord={this.state.rhymeWord}
        onRhymeWordChange={this.onRhymeWordChange}
        onSearchClick={this.onSearchClick}
      />
    );
  }
}
