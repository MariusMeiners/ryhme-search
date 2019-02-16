import React from "react";

import { getListOfRyhmeWordsForGivenWord } from "../api/searchApi";
import SearchComponent from "../components/SearchComponent";

export default class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ryhmeWord: "",
      foundRhymeWords: [],
      highestScore: undefined,
      highestNumberOfSyllables: undefined
    };
  }

  onSearchClick = async () => {
    const foundRhymeWords = await getListOfRyhmeWordsForGivenWord(
      this.state.ryhmeWord
    );
    const highestNumberOfSyllables = Math.max(
      ...foundRhymeWords.map(e => e.numSyllables)
    );
    const highestScore = Math.max(...foundRhymeWords.map(e => e.score));

    this.setState({ foundRhymeWords, highestScore, highestNumberOfSyllables });
  };

  onRhymeWordChange = changeEvent => {
    this.setState({ ryhmeWord: changeEvent.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <SearchComponent
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
