import React from 'react';
import { shallow } from 'enzyme';

import Cities from './Cities';
import City from '../city';
import CityViewModel from '../../../test/factories/view-models/city';

const mockCities = [
  CityViewModel.build({ name: 'Berlin' }),
  CityViewModel.build({ name: 'Paris' })
];

describe('<Cities />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Cities cities={mockCities} />);
  });

  test('renders 2 <City />', () => {
    expect(wrapper.find(City).length).toEqual(2);
  });

  test('renders <City /> with the right props', () => {
    const { city } = wrapper.find(City).first().props();
    expect(city).toEqual(mockCities[0]);
  });
});
