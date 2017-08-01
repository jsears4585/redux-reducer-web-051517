export function manageFriends(state, action){

  const indexToRemove = state.friends.findIndex(function(f) {
    return f.id === action.id
  })

  switch(action.type) {

    case 'ADD_FRIEND':
    return Object.assign({}, state, {
      friends: [
        ...state.friends,
        action.friend
      ]
    })
    break

    case 'REMOVE_FRIEND':
    return Object.assign({}, state, {
      friends: [
        ...state.friends.slice(0, indexToRemove),
        ...state.friends.slice(indexToRemove + 1)
      ]
    })
    break

    default:
      return state
  }
}
