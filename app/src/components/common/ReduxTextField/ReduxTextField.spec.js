import React from 'react'
import {shallow} from 'enzyme'
import {shallowToJson} from 'enzyme-to-json'
import { Field } from 'redux-form'

import ReduxTextField from './ReduxTextField'

xdescribe('ReduxTextField', () => {
  test('should pass snapshot test', () => {
    const component = shallow(<Field name='mobile' component={ReduxTextField} type='text' label='Mobile'/>)
    const tree = shallowToJson(component)
    expect(tree).toMatchSnapshot()
  })
})
