export function managePresents(state, action) {

  switch(action.type) {

    case 'INCREASE':
    return Object.assign({}, state, {
      numberOfPresents: state.numberOfPresents + 1
    })
    break
    default:
      return state
  }

}
