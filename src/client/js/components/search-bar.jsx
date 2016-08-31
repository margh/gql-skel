import React, { PropTypes } from 'react';

const SearchBar = ({ changeBar }) => (
  <input className="searchBar" onChange={(e) => changeBar(e.target.value)} />
);

SearchBar.propTypes = {
  changeBar: PropTypes.func.isRequired,
};

export default SearchBar;
