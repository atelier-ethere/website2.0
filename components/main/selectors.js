import { createSelector } from "reselect"

const getFooter = (state) => state.footer

export const getFooterActive = createSelector([getFooter], (footer) =>
  footer.get("active")
)

export const getFooterExit = createSelector([getFooter], (footer) =>
  footer.get("exit")
)

// WEBPACK FOOTER //
// ./src/components/main/selectors.js
