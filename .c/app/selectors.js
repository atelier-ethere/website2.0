import { createSelector } from "reselect"

const getApp = (state) => state.app
const getPageHome = (state) => state.page_home
const getPageCollection = (state) => state.page_collection
const getPageSubcollection = (state) => state.page_subcollection
const getPageArtist = (state) => state.page_artist

export const getCanGridAnimate = createSelector(
  [getApp],
  (app) => !app.get("gridAnimate")
)

export const getPreventScroll = createSelector([getApp], (app) =>
  app.get("preventScroll")
)

const getRow = (state, props) => state.app.get("rows").get(props.rowIndex)

const getRowOffset = (state, props) =>
  state.app.get("rowOffsets").get(props.rowIndex)

const getFirstRow = (state) => state.app.get("rows").get(0)

export const getFirstRowDelta = createSelector([getFirstRow], (row) => row)

export const getRowDelta = createSelector([getRow], (row) => row)

export const getRowOffsetTop = createSelector(
  [getRowOffset],
  (rowOffset) => rowOffset
)

export const getCurrentPageName = createSelector([getApp], (app) =>
  app.get("currentPageName")
)

export const getPageHomeSt = createSelector([getPageHome], (pageHome) =>
  pageHome.get("st")
)

export const getPageHomeStDelta = createSelector(
  [getPageHome],
  (pageHome) => pageHome.get("st") - pageHome.get("prevSt")
)

export const getPageHomeHeight = createSelector([getPageHome], (pageHome) => {
  return pageHome.get("ph")
})

export const getPageArtistSt = createSelector([getPageArtist], (pageArtist) =>
  pageArtist.get("st")
)

export const getPageArtistSaveSt = createSelector(
  [getPageArtist],
  (pageArtist) => pageArtist.get("saveSt")
)

export const getPageCollectionSaveSt = createSelector(
  [getPageCollection],
  (pageCollection) => pageCollection.get("saveSt")
)

export const getPageCollectionSt = createSelector(
  [getPageCollection],
  (pageCollection) => pageCollection.get("st")
)

export const getPageSubcollectionSt = createSelector(
  [getPageSubcollection],
  (pageSubcollection) => pageSubcollection.get("st")
)

export const getViewMode = createSelector([getApp], (app) =>
  app.get("viewMode")
)

export const getCurrentRowIndex = createSelector([getApp], (app) =>
  app.get("rowIndex")
)

export const getDocumentHeight = createSelector([getApp], (app) =>
  app.get("dh")
)

export const getViewportHeight = createSelector([getApp], (app) =>
  app.get("vh")
)

export const getViewportWidth = createSelector([getApp], (app) => app.get("vw"))

export const getScrollTop = createSelector([getApp], (app) => app.get("st"))

export const getScrollEnd = createSelector([getApp], (app) => {
  const st = app.get("st")
  const vh = app.get("vh")
  const dh = app.get("dh")

  if (dh === 0) return false
  if (vh === 0) return false
  if (st === 0) return false

  const isAtBottom = st + vh >= dh

  if (isAtBottom) {
    return true
  } else {
    return false
  }
})

export const getDebug = createSelector([getApp], (app) => app.get("debug"))

export const getTransitionActive = createSelector([getApp], (app) =>
  app.get("transitionActive")
)

export const getPreviousLocation = createSelector([getApp], (app) =>
  app.get("previousLocation")
)

export const getLocation = createSelector([getApp], (app) =>
  app.get("location")
)

// WEBPACK FOOTER //
// ./src/components/app/selectors.js
