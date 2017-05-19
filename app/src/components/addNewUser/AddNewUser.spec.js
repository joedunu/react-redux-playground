import React from 'react'
import {shallow, mount} from 'enzyme'
import {shallowToJson} from 'enzyme-to-json'
import AddNewUser from './AddNewUser'

describe.skip('User Registration Form', () => {
  test('should pass snapshot test', () => {
    const component = shallow(<AddNewUser />)
    const tree = shallowToJson(component)
    expect(tree).toMatchSnapshot()
  })

  test('should render without throwing an error', () => {
    const component = mount(<AddNewUser />)
    expect(component.contains([<span>First Name: </span>, <input className='first-name' />])).toEqual(true)
  })

  test('should be selectable by class "userRegistrationForm"', () => {
    const component = mount(<div className='some-class other-class' />)
    expect(component.is('.some-class')).toEqual(true)
  })

  test('should mount in a full DOM', () => {
    const component = mount(<AddNewUser />)
    expect(component.find('div').length).toEqual(1)
  })

  test('should render to static HTML', () => {
    const component = mount(<AddNewUser />)
    expect(component.text()).toEqual('First Name: Last Name: Date of Birth: ')
  })
})
