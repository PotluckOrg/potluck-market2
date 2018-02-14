import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import {Routes} from './routes'
import sinon from 'sinon'

describe('<Routes />', () => {
    it('should render the <Pantry /> component if user is not logged in', () => {
      const wrapper = shallow(<Routes />);
      expect(wrapper.find(Pantry)).to.have.length(1);
    });
})