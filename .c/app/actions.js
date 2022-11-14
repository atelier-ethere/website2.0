import * as types from "./action-types"

export const updateRowDelta = (index, delta) => ({
  type: types.APP_UPDATE_ROW_DELTA,
  payload: {
    index,
    delta,
  },
})

export const updateRowOffset = (index, offset) => ({
  type: types.APP_UPDATE_ROW_OFFSET,
  payload: {
    index,
    offset,
  },
})

export const toggleDebug = () => ({
  type: types.APP_TOGGLE_DEBUG,
})

export const toggleViewMode = () => ({
  type: types.APP_TOGGLE_VIEW_MODE,
})

export const updateScrollTop = (st) => ({
  type: types.APP_UPDATE_SCROLL_TOP,
  payload: st,
})

export const updateViewportDimensions = (vw, vh) => ({
  type: types.APP_UPDATE_VIEWPORT_DIMENSIONS,
  payload: {
    vw: vw,
    vh: vh,
  },
})

export const updateDocumentHeight = (dh) => ({
  type: types.APP_UPDATE_DOCUMENT_HEIGHT,
  payload: dh,
})

export const currentPageName = (pageName) => ({
  type: types.APP_CURRENT_PAGE,
  payload: pageName,
})

export const setTransitionActive = (active) => ({
  type: types.APP_SET_TRANSITION_ACTIVE,
  payload: active,
})

export const setPreventScroll = (preventScroll) => ({
  type: types.APP_SET_PREVENT_SCROLL,
  payload: preventScroll,
})

export const setGridAnimate = (animate) => ({
  type: types.APP_SET_GRID_ANIMATE,
  payload: animate,
})

export const changeLocation = (location) => ({
  type: types.APP_CHANGE_LOCATION,
  payload: location,
})

// WEBPACK FOOTER //
// ./src/components/app/actions.js
