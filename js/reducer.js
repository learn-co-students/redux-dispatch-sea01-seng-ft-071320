let state = {count: 0}

//reducer takes in state and an action 
//reducer must return something
function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

// puts items to screen
function render(){
  document.body.textContent = state.count
}

//dispatch takes an action, passes the action to the appropriate function along with state
function dispatch(action){
  state = changeState(state, action)
  render()
}



// let action = {type: 'INCREASE_COUNT'}

dispatch({type: 'INCREASE_COUNT'})

// changeState(state, action)