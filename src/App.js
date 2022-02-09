import { Component } from "react";
import Button from "./Components/Button/Button";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import SearchBar from "./Components/Searchbar/Searchbar";
import { newSearch } from "./utils/newSearch";

class App extends Component {
  state = {
    query: "",
    newFetch: [],
    page: 1,
  };
  componentDidMount() {
    newSearch()
      .then((newFetch) => this.setState({ newFetch }))

      .catch((error) => this.setState({ error: error.message }));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query && this.state.query) {
      console.log(newSearch(this.state.query));
      newSearch(this.state.query)
        .then((newFetch) => this.setState({ newFetch }))

        .catch((error) => this.setState({ error: error.message }));
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      // console.log(this.state.query);
      newSearch(this.state.query, this.state.page)
        .then((newFetch) =>
          this.setState((prev) => ({
            newFetch: [...prev.newFetch, ...newFetch],
          }))
        )

        .catch((error) => this.setState({ error: error.message }));
    }
  }

  handleSearchSubmmit = (query) => {
    this.setState({ query, page: 1 });
  };
  handlerLoadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  render() {
    const { newFetch } = this.state;
    // console.log(this.state.newFetch);
    return (
      <div>
        <SearchBar onSubmit={this.handleSearchSubmmit} />
        <ImageGallery newFetch={newFetch} />
        <Button handleLoadMore={this.handlerLoadMore} />
      </div>
    );
  }
}

export default App;
