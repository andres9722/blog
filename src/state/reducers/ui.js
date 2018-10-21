import { SHOW_MODAL } from '../actions'

const initialStateInteraction = {
  showModal: false
}

const ui = (state = initialStateInteraction, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: !state.showModal }
    default:
      return state
  }
}

export default ui
