import React from 'react';
import { SearchField, SearchSubmit } from './SearchForm.styled';

const SearchForm = ({ handlerSubmit }) => {
  return (
    <form onSubmit={handlerSubmit}>
      <SearchField type="text" />
      <SearchSubmit>Search</SearchSubmit>
    </form>
  );
};

export default SearchForm;
