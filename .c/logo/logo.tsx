import React from "react"

import classnames from "classnames"

import LogoGraphic from "./logo-graphic"
import "./logo.scss"

const Logo = ({ st, active, colour, animate, vw, vh, scrollHidden }) => (
  <div
    style={{ top: active ? 0 : `${st - vh}px` }}
    className={classnames(
      {
        "logo--hidden": animate && scrollHidden,
        "logo--active": !animate || (!scrollHidden && active),
      },
      "logo"
    )}
  >
    <LogoGraphic
      st={st}
      active={active}
      animate={animate}
      colour={colour}
      vw={vw}
      vh={vh}
    />
  </div>
)

export default Logo
