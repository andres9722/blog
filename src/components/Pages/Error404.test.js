import React from 'react'
import { mount, configure } from 'enzyme'
import Error404 from './Error404'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('Render Eror 404', () => {
  it('render correctly Error 404 page', () => {
    const Error404Component = mount(<Error404 />)
    expect(Error404Component).toMatchSnapshot()
  })
})
