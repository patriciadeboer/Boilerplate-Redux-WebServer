
const initialState={};

export const INITIAL_ACTION = 'INITIAL_ACTION'

export const initialAction = (input) => ({
  type: INITIAL_ACTION,
  input
})

export const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_ACTION:
      return {
        ...state,
        action: action.input
      }

    default:
      return state
  }
}
