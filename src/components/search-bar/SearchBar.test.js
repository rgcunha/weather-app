import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';
import { Button, FormControl } from 'react-bootstrap';

const mockOnSearchTextChange = jest.fn();
const mockOnSearchClick = jest.fn();

describe('<SearchBar />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<SearchBar onSearchClick={mockOnSearchClick} onSearchTextChange={mockOnSearchTextChange} />);
  });

  test('renders the right elements', () => {
    expect(wrapper.find(Button).length).toEqual(1);
    expect(wrapper.find(FormControl).length).toEqual(1);
  });

  test('simulate click events', () => {
    wrapper.find(Button).simulate('click');
    expect(mockOnSearchClick.mock.calls.length).toEqual(1);
  });

  test('simulate change events', () => {
    const mockEvent = { target: { value: "Berlin" } }
    wrapper.find(FormControl).simulate('change', mockEvent);
    expect(mockOnSearchTextChange.mock.calls.length).toEqual(1);
  });
});
