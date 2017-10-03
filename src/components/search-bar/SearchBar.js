import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = (props) => {
  const { onSearchClick, onSearchTextChange } = props;
  const onTextChange = e => (onSearchTextChange(e.target.value));

  return (
    <div className="search-bar">
      <Form inline>
        <FormGroup controlId="formInlineCityName">
          <FormControl type="text" placeholder="e.g.: Berlin" onChange={onTextChange} />
        </FormGroup>
        {' '}
        <Button className="btn btn-primary" onClick={onSearchClick}>Search</Button>
      </Form>
    </div>
  );
};

SearchBar.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired
};

export default SearchBar;
