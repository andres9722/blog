import React from 'react'
import { mount, configure } from 'enzyme'
import Loader from './Loader'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('Render Spinner', () => {
  it('render correctly Spinner component', () => {
    const LoaderComponent = mount(<Loader />)
    expect(LoaderComponent).toMatchSnapshot()
  })
})
