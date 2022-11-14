import * as types from "./action-types"

export const setMainFooterActive = (active) => ({
  type: types.SET_MAIN_FOOTER_ACTIVE,
  payload: active,
})

export const setMainFooterExit = (exit) => ({
  type: types.SET_MAIN_FOOTER_EXIT,
  payload: exit,
})
