import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { UserReducer } from '../reducers'

let store = null
export default {
  createStore: () => {
    const reducers = combineReducers({
      user: UserReducer
    })

    store = createStore(reducers, applyMiddleware(thunk))

    return store
  },

  currentStore: () => {
    return store
  }
}
