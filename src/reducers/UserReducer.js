import constants from '../constants'

const initial_state = {
  user: [{ first_name: 'James', last_name: 'Bond-007' }]
}

export default (state = initial_state, action) => {
  switch (action.type) {
    case constants.ADD_USER:
      let new_state = Object.assign({}, state)
      let user_state = Object.assign([], state.user)
      user_state.push(action.data)
      new_state['user'] = user_state
      return new_state

    default:
      return state
  }
}
