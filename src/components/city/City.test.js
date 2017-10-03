import React from 'react';
import { shallow } from 'enzyme';

import City from './City';
import CityRow from '../city-row';
import CityViewModel from '../../../test/factories/view-models/city';

const mockCity = CityViewModel.build();

describe.skip('<City />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<City city={mockCity} />);
  });

  test('renders 8 <CityRow />', () => {
    expect(wrapper.find(CityRow).length).toEqual(8);
  });

  test('renders <CityRow /> with the right props', () => {
    const { title, description } = wrapper.find(CityRow).first().props();
    expect(title).toEqual("Max");
    expect(description).toEqual("12 °C");
  });
});
