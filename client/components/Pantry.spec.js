import {expect} from 'chai'
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import {Pantry} from './Pantry'
import sinon from 'sinon'
import ItemCard from './ItemCard';
import Router from 'react-router-dom'

describe('<Pantry />', () => {
    const wrapper = mount(<Pantry />);
    it('should render an <ItemCard /> component for each item', () => {
    //   const wrapper = shallow(<Pantry />);
      expect(wrapper.find(ItemCard)).to.have.length(3);
    });
})