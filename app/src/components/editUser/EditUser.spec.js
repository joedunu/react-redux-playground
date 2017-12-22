import React from 'react'
import {shallow, mount} from 'enzyme'
import {shallowToJson} from 'enzyme-to-json'
import configureMockStore from 'redux-mock-store'

import EditUser from './EditUser'
import PropTypes from 'prop-types'

describe('User Registration Form', () => {
  const mockStore = configureMockStore([])
  let store
  let combinedReducersState = {}
  const initValues = {
    id: 0,
    firstName: 'Bob',
    lastName: 'John'
  }

  beforeEach(() => {
    store = mockStore(combinedReducersState)
  })

  test('should pass snapshot test', () => {
    const component = shallow(<EditUser
      store={store}
      updateUserRequest={jest.fn()}
      goTo={jest.fn()}
      initialValues={initValues}
    />)
    const tree = shallowToJson(component)
    expect(tree).toMatchSnapshot()
  })

  test('should be selectable by class "userRegistrationForm"', () => {
    const component = mount(<div className='some-class other-class' />)
    expect(component.is('.some-class')).toEqual(true)
  })

  test('should mount in a full DOM', () => {
    const component = shallow(<EditUser
      store={store}
      updateUserRequest={jest.fn()}
      goTo={jest.fn()}
      initialValues={initValues}
    />)
    expect(component.find('div').length).toEqual(1)
  })

  test('should render to static HTML', () => {
    const component = shallow(<EditUser
      store={store}
      updateUserRequest={jest.fn()}
      goTo={jest.fn()}
      initialValues={initValues}
    />)
    expect(component.text()).toEqual('<ReduxForm />')
  })
})
