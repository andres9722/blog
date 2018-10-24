import React from 'react'
import { shallow, configure } from 'enzyme'
import Blog from './Blog'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'
configure({ adapter: new Adapter() })

const mockStore = configureStore()

describe('Render Blog', () => {
  it('render correctly Blog component', () => {
    const store = mockStore({ posts: {} })

    const BlogComponent = shallow(<Blog store={store} />).dive()
    expect(BlogComponent).toMatchSnapshot()
  })
})
