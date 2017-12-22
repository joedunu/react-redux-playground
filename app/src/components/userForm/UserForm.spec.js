import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import UserForm from './UserForm'

describe('UserForm', () => {
  test('snapshot test - no props', () => {
    const component = shallow(<UserForm />)
    const tree = shallowToJson(component)
    expect(tree).toMatchSnapshot()
  })

  test('snapshot test - basic props', () => {
    const component = shallow(
      <UserForm
        handleSubmit={jest.fn()}
        enableEdit={false}
        title='Some Form'
        goTo={jest.fn()}
      />)
    const tree = shallowToJson(component)
    expect(tree).toMatchSnapshot()
  })
})
