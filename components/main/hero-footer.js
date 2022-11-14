import React from "react"

import classnames from "classnames"
import { connect } from "react-redux"

import { getViewportHeight } from "../app/selectors"
import Hero from "../hero"
import Logo from "../logo"

const HeroFooter = ({ match, active, st, vh }) => (
  <div
    className={classnames({ "hero__footer--active": active }, "hero__footer")}
  >
    <div className="hero__footer-content">
      <Hero primary={false} active={match && match.isExact && st < vh} />
      <Logo animate={false} active={true} />
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    active: state.footer.get("active"),
    vh: getViewportHeight(state),
    st: state["page_home"].get("st"),
  }
}

export default connect(mapStateToProps, null)(HeroFooter)
