import React from 'react'
import ReactDOM from 'react-dom'
import { Users } from './components/container'
import { Provider } from 'react-redux'
import store from './store'

const App = () =>
  <Provider store={store.createStore()}>
    <Users />
  </Provider>

ReactDOM.render(<App />, document.getElementById('root'))
