import React from 'react'
import { configure, shallow } from 'enzyme'
import Modal from './Modal'
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

const mockStore = configureStore()

describe('class condition to show modal in the interface', () => {
  it('show = false', () => {
    const store = mockStore({
      show: false
    })

    const wrapper = shallow(<Modal store={store} />)

    expect(wrapper.find('#modal').prop('className')).toEqual('modal')
  })
})
