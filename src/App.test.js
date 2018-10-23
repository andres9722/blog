import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './state/store'
import { configure, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

const { store } = configureStore()

it('App renders without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
})
