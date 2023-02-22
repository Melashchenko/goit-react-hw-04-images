import { Component } from 'react';
import {
  SearchbarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = { nameImages: '' };

  handleImagesChange = e => {
    this.setState({ nameImages: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.nameImages.trim() === '') {
      alert('Search images and photos');
      return;
    }

    this.props.onSubmit(this.state.nameImages);
    this.setState({ nameImages: '' });
  };

  render() {
    return (
      <SearchbarStyled>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            name="nameImages"
            placeholder="Search images and photos"
            value={this.state.nameImages}
            onChange={this.handleImagesChange}
          />
        </SearchForm>
      </SearchbarStyled>
    );
  }
}
