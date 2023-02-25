import PropTypes from 'prop-types';

import { useState } from 'react';
import {
  SearchbarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [nameImages, getNameImages] = useState('');

  const handleImagesChange = e => {
    getNameImages(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (nameImages.trim() === '') {
      alert('Search images and photos');
      return;
    }

    onSubmit(nameImages);
    getNameImages('');
  };

  return (
    <SearchbarStyled>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          name="nameImages"
          placeholder="Search images and photos"
          value={nameImages}
          onChange={handleImagesChange}
        />
      </SearchForm>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
