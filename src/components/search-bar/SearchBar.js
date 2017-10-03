import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = (props) => {
  const { onSearchClick, onSearchTextChange } = props;
  const onTextChange = e => (onSearchTextChange(e.target.value));

  return (
    <div className="search-bar">
      <input name="city-name" type="text" onChange={onTextChange} placeholder="e.g: Berlin" />
      <button onClick={onSearchClick} className="btn btn-primary">Search</button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired
};

export default SearchBar;
