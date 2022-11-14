import { createSelector } from "reselect"

const getApp = (state) => state.app

const getPageHome = (state) => state.page_home

export const getLogoSt = createSelector([getPageHome], (pageHome) =>
  pageHome.get("st")
)

export const getLogoDelta = createSelector([getApp], (app) => {
  const st = app.get("st")
  const vh = app.get("vh")

  if (st === 0) return 0
  if (vh === 0) return 0

  const threshold = 0.5
  let delta = (st - vh * threshold) / vh
  delta = delta + 0.5 // 0 to 1
  delta = Math.max(0, Math.min(1, delta))

  return delta
})

export const getLogoActive = createSelector([getApp], (app) => {
  const prevSt = app.get("prevSt")
  const st = app.get("st")
  const vh = app.get("vh")
  const dh = app.get("dh")

  const dir = st - prevSt
  const downThreshold = 0.4
  const upThreshold = 0.6
  const threshold = dir > 0 ? downThreshold : upThreshold
  // dir greater than 0 is scrolling DOWN the page

  if (st > vh * threshold && st < dh - vh) {
    return true
  } else {
    return false
  }
})

export const getLogoHidden = createSelector(
  [getPageHome, getApp],
  (pageHome, app) => {
    const st = pageHome.get("st")
    const ph = pageHome.get("ph")
    const vh = app.get("vh")

    if (st === 0) return false
    if (vh === 0) return false
    if (ph === 0) return false

    if (st + vh > ph - vh) {
      return true
    } else {
      return false
    }
  }
)
