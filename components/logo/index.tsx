import { connect } from "react-redux"

import { getViewportHeight, getViewportWidth } from "../app/selectors"
import Logo from "./logo"
import { getLogoSt, getLogoActive, getLogoHidden } from "./selectors"

const mapStateToProps = (state) => {
  return {
    st: getLogoSt(state),
    scrollActive: getLogoActive(state),
    scrollHidden: getLogoHidden(state),
    vw: getViewportWidth(state),
    vh: getViewportHeight(state),
  }
}

export default connect(mapStateToProps, null)(Logo)
