import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import UserRegistrationForm from './UserRegistrationForm'

test('Search snapshot test', () => {
  const component = shallow(<UserRegistrationForm />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
