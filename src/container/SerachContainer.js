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
      highestNumberOfSyllables: undefined
    };
  }

  onSearchClick = async () => {
    const foundRhymeWords = await getListOfRhymeWordsForGivenWord(
      this.state.rhymeWord
    );
    const highestNumberOfSyllables = Math.max(
      ...foundRhymeWords.map(e => e.numSyllables)
    );
    const highestScore = Math.max(...foundRhymeWords.map(e => e.score));

    this.setState({ foundRhymeWords, highestScore, highestNumberOfSyllables });
  };

  onRhymeWordChange = changeEvent => {
    this.setState({ rhymeWord: changeEvent.target.value });
  };

  setRhymeWord = rhymeWord => {
    console.log(rhymeWord);
    this.setState({ rhymeWord }, () => {
      this.onSearchClick();
    });
  };

  render() {
    console.log(this.state);
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
