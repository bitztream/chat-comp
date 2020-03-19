import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '../../../src/js/components/App';

describe('<App/>', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<App/>);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
