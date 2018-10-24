import React from 'react'
import { configure, shallow } from 'enzyme'
import Header from './Header'
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

const mockStore = configureStore()

describe('address of the routes depending on the authentication status', () => {
  it('authentication status = false', () => {
    const store = mockStore({
      auth: { loggedIn: false, user: null }
    })

    const wrapper = shallow(<Header store={store} />).dive()

    expect(wrapper.find('.header__link').prop('to')).toEqual('/')
  })

  it('authentication status = true', () => {
    const store = mockStore({
      auth: { loggedIn: true, user: null }
    })

    const wrapper = shallow(<Header store={store} />).dive()

    expect(wrapper.find('.header__link').prop('to')).toEqual('/posts/')
  })
})
