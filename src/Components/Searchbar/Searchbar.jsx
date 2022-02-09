import { Component } from "react";
import s from './SearchBar.module.css'

export default class SearchBar extends Component {
  state = {
      query: ''
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value.toLowerCase()});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.query.trim() === '') {
      alert('Pls enter your query')
      return;
    }
    this.props.onSubmit(this.state.query)
      this.setState({query: ''});    
    };
    
  render() {
    return (
      <>
        <header className={s["Searchbar"]}>
          <form className={s["SearchForm"]} onSubmit={this.handleSubmit}>
            <button type="submit" className={s["SearchForm-button"]}>
              <span className={s["SearchForm-button-label"]}>Search</span>
            </button>

            <input
              className={s["SearchForm-input"]}
              name="query"
              type="text"
              // autocomplete="off"
              // autofocus
              placeholder="Search images and photos"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </>
   );
  }
};
