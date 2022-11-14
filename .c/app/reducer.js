import { fromJS } from "immutable"

import * as types from "./action-types"

const InitialState = fromJS({
  location: null,
  previousLocation: null,
  debug: false,
  viewMode: false,
  currentPageName: null,
  backPathname: "",
  prevSt: 0,
  rows: [],
  rowOffsets: [],
  transitionActive: false,
  st: 0,

  // @NOTE - this is rather unorthodox but it allows us to have
  // the real values from the beginning and avoid having to update
  // all the components twice at startup. Specially important now
  // since a lot of the centering uses `height: vh` to get the real
  // viewport height on mobile.
  vw: (window && window.innerWidth + 1) || 0,
  vh: (window && window.innerHeight + 1) || 0,

  dh: 0,
  preventScroll: true,
  gridAnimate: false,
})

export default (state = InitialState, action) => {
  switch (action.type) {
    case types.APP_CHANGE_LOCATION:
      return state
        .set("previousLocation", state.get("location"))
        .set("location", action.payload)

    case types.APP_SET_GRID_ANIMATE:
      return state.set("gridAnimate", action.payload)

    case types.APP_SET_PREVENT_SCROLL:
      return state.set("preventScroll", action.payload)

    case types.APP_SET_TRANSITION_ACTIVE:
      return state.set("transitionActive", action.payload)

    case types.APP_CURRENT_PAGE:
      return state.set("currentPageName", action.payload)

    case types.APP_TOGGLE_DEBUG:
      const currDebug = state.get("debug")
      return state.set("debug", !currDebug)

    case types.APP_UPDATE_ROW_OFFSET: {
      const { payload } = action
      const { index, offset } = payload

      const rows = state.get("rowOffsets")
      const updatedRowOffsets = rows.set(index, offset)

      return state.set("rowOffsets", updatedRowOffsets)
    }

    case types.APP_UPDATE_ROW_DELTA: {
      const { payload } = action
      const { index, delta } = payload

      const rows = state.get("rows")
      const updatedRows = rows.set(index, delta)

      return state.set("rows", updatedRows)
    }

    case types.APP_TOGGLE_VIEW_MODE:
      const viewMode = state.get("viewMode")
      return state.set("viewMode", !viewMode)

    case types.APP_UPDATE_SCROLL_TOP:
      // Store previous value to use for direction
      const prevSt = state.get("st")
      return state.set("st", action.payload).set("prevSt", prevSt)

    case types.APP_UPDATE_VIEWPORT_DIMENSIONS:
      return state.set("vw", action.payload.vw).set("vh", action.payload.vh)

    case types.APP_UPDATE_DOCUMENT_HEIGHT:
      return state.set("dh", action.payload)

    default:
      return state
  }
}
