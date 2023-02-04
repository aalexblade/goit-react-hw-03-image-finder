import { React, Component } from "react";
import PropTypes from "prop-types";
import {
  SearchContainer,
  SearchForm,
  SearchButton,
  SearchLable,
  SeartchImpot,  
} from "./Searchbar.styled";


export class Searchbar extends Component {
  
  state = {
    search: '',
  };

  searchResult = event => {
    this.setState({
      search: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { search } = this.state;

    this.porops.onSubmit(search);
    this.setState({
      search: '',
    });
  };

  render() {
    const { search } = this.state;
    return (
      <SearchContainer>
        <SearchForm>
        <SearchButton type="submit">
         <SearchLable>Search</SearchLable>
          </SearchButton>
          
          <SeartchImpot
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={search}
            onChange={this.searchResult}
          />
         </SearchForm>
      </SearchContainer>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};