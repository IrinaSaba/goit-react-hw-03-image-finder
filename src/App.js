import { Component } from "react";
import SearchBar from "./Components/Searchbar/Searchbar";

export default class App extends Component {
  state = {
    query: "",
  };

  handleSearchSubmmit = (query) => {
    this.setState({ query });
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSearchSubmmit} />
      </div>
    );
  }
}
