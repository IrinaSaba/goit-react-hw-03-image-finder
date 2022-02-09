import { Component } from "react";
import Button from "./Components/Button/Button";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import SearchBar from "./Components/Searchbar/Searchbar";
import { newSearch } from "./utils/newSearch";
import { Hearts } from "react-loader-spinner";
import s from "./Components/Hearts/Hearts.module.css";
import st from "./Components/Error/error.module.css";

class App extends Component {
  state = {
    query: "",
    newFetch: [],
    page: 1,
    isLoading: false,
    error: null,
  };
  componentDidMount() {
    newSearch()
      .then((newFetch) => this.setState({ newFetch }))
      .catch((error) => this.setState({ error: error.message }));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query && this.state.query) {
      this.setState({ isLoading: true, error: null });
      // console.log(newSearch(this.state.query));
      newSearch(this.state.query)
        .then((newFetch) => this.setState({ newFetch }))
        .catch((error) => this.setState({ error: error.message }))
        .finally(() => this.setState({ isLoading: false }));
    }
    if (
      prevState.page !== this.state.page &&
      this.state.page !== 1 &&
      this.state.query !== ""
    ) {
      this.setState({ isLoading: true });
      // console.log(this.state.query);
      newSearch(this.state.query, this.state.page)
        .then((newFetch) =>
          this.setState((prev) => ({
            newFetch: [...prev.newFetch, ...newFetch],
          }))
        )
        .catch((error) => this.setState({ error: error.message }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleSearchSubmmit = (query) => {
    this.setState({ query, page: 1, newFetch: [] });
  };
  handlerLoadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  render() {
    const { newFetch, isLoading, query, error } = this.state;
    // console.log(this.state.newFetch);
    return (
      <div>
        <SearchBar onSubmit={this.handleSearchSubmmit} />
        {error ? (
          <p className={st["error"]}>{error}</p>
        ) : (
          <>
            <ImageGallery newFetch={newFetch} />
            {isLoading ? (
              <div className={s["hearts"]}>
                <Hearts
                  heigth="100"
                  width="100"
                  color="blue"
                  ariaLabel="loading"
                />
              </div>
            ) : (
              newFetch.length > 0 &&
              query &&
              newFetch.length % 12 === 0 && (
                <Button handleLoadMore={this.handlerLoadMore} />
              )
            )}
          </>
        )}
      </div>
    );
  }
}

export default App;
