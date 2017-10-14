import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Users extends Component {
  constructor() {
    super()
    this.state = { user: { first_name: '', last_name: '' } }
  }

  addNewUser(field, e) {
    var user_state = Object.assign({}, this.state.user)
    if (field === 'first_name') {
      let first_name = e.target.value
      user_state['first_name'] = first_name
    } else if (field === 'last_name') {
      let last_name = e.target.value
      user_state['last_name'] = last_name
    }
    this.setState({
      user: user_state
    })
  }

  addUserToStore() {
    this.props.addUser(this.state.user)
  }

  render() {
    let user_array = this.props.user.user

    return (
      <div>
        Welcome user{' '}
        <ol>
          {user_array.map((user, i) => {
            return (
              <li key={i}>
                {user.first_name}
              </li>
            )
          })}
        </ol>
        <br />
        <input
          type="text"
          placeholder="enter first name"
          name="firstname"
          onChange={this.addNewUser.bind(this, 'first_name')}
        />
        <br />
        <input
          type="text"
          placeholder="enter last name"
          name="lastname"
          onChange={this.addNewUser.bind(this, 'last_name')}
        />
        <br />
        <button onClick={this.addUserToStore.bind(this)}>Submit</button>
      </div>
    )
  }
}

const stateToProps = state => {
  return {
    user: state.user
  }
}

const dispatchToProps = dispatch => {
  return {
    addUser: user => {
      dispatch(actions.addUser(user))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Users)
