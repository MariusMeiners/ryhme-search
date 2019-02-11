import React from "react";

import { getListOfRyhmeWordsForGivenWord } from "../api/searchApi";
import SearchComponent from "../components/SearchComponent";

export default class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ryhmeWord: "",
      foundRhymeWords: []
    };
  }

  onSearchClick = async () => {
    const foundRhymeWords = await getListOfRyhmeWordsForGivenWord(
      this.state.ryhmeWord
    );
    this.setState({ foundRhymeWords });
  };

  onRhymeWordChange = changeEvent => {
    this.setState({ ryhmeWord: changeEvent.target.value });
  };

  render() {
    return (
      <SearchComponent
        foundRhymeWords={this.state.foundRhymeWords}
        rhymeWord={this.state.rhymeWord}
        onRhymeWordChange={this.onRhymeWordChange}
        onSearchClick={this.onSearchClick}
      />
    );
  }
}
