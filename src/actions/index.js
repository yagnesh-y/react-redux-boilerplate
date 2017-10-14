import constants from '../constants'

export default {
  addUser: user => {
    return {
      type: constants.ADD_USER,
      data: user
    }
  }
}
