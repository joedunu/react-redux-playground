import React from 'react'
import {shallow} from 'enzyme'
import {shallowToJson} from 'enzyme-to-json'
import configureMockStore from 'redux-mock-store'

import SignUP from './SignUP'

describe('User Registration Form', () => {
  const mockStore = configureMockStore([])
  let store
  let combinedReducersState = {
    form: {}
  }

  beforeEach(() => {
    store = mockStore(combinedReducersState)
  })

  test('should pass snapshot test', () => {
    const component = shallow(<SignUP
      store={store}
      goTo={jest.fn()}
    />)
    const tree = shallowToJson(component)
    expect(tree).toMatchSnapshot()
  })
})
