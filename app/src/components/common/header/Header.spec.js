import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Header from './Header'

it('Search snapshot test', () => {
  const component = shallow(<Header />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
