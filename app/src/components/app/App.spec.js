import React from 'react'
import {shallow} from 'enzyme'
import {shallowToJson} from 'enzyme-to-json'
import configureMockStore from 'redux-mock-store'

import App from './App'

describe('App', () => {
  const mockStore = configureMockStore([])
  let store
  const history = {}
  let combinedReducersState = {
    form: {}
  }

  beforeEach(() => {
    store = mockStore(combinedReducersState)
  })

  test('should pass snapshot test', () => {
    const component = shallow(<App
      store={store}
      history={history}
    />)
    const tree = shallowToJson(component)
    expect(tree).toMatchSnapshot()
  })
})
