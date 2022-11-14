import { fromJS } from "immutable"

import * as types from "./action-types"

const InitialState = fromJS({
  active: false,
  exit: false,
})

export default (state = InitialState, action) => {
  switch (action.type) {
    case types.SET_MAIN_FOOTER_ACTIVE:
      return state.set("active", action.payload)

    case types.SET_MAIN_FOOTER_EXIT:
      return state.set("exit", action.payload)

    default:
      return state
  }
}

// WEBPACK FOOTER //
// ./src/components/main/reducer.js
