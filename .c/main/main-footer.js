import React, { Component } from "react"

import classnames from "classnames"
import { connect } from "react-redux"

import { getViewportWidth, getViewportHeight } from "../app/selectors"
import ArtistListContainer from "../artist-list-container"
import {
  createSetPageScrollEnd,
  createSetPageScroll,
} from "../create-page/create-page-actions"
import { navOutArtists } from "../navigation/actions"
import { setMainFooterActive, setMainFooterExit } from "./actions"
import { getFooterActive, getFooterExit } from "./selectors"
import UpSVG from "./up-svg"

// Can hard-code page name here as main footer only affects homepage
const setScrollEnd = createSetPageScrollEnd("HOME")
const setPageScroll = createSetPageScroll("HOME")

class MainFooter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spacerOpacity: 0,
      up: false,
      upX: 0,
      upY: 0,
      atBottom: false,
      overSpacer: false,
    }
    this.tempUpX = 0
    this.tempUpY = 0
    this.targetUpX = 0
    this.targetUpY = 0
  }
  componentDidMount() {
    this.addListeners()
    this.getInnerRect()
  }

  componentDidUpdate(prevProps) {
    this.updateOnActive(prevProps)
    this.getInnerRect()
  }

  componentWillUnmount() {
    this.removeListeners()
    this.clearCompleteTimeout()
    this.clearResetTimeout()
    this.cancelTick()
  }

  updateOnActive(prevProps) {
    const { active: nextActive } = this.props
    const { active: prevActive } = prevProps
    const activeDidChange = nextActive !== prevActive

    if (!activeDidChange) return

    if (nextActive) {
      this.el && this.el.scrollTo(0, 1)
      this.addMouseMoveListener()
      this.startTick()
    } else {
      this.removeMouseMoveListener()
      this.cancelTick()
    }
  }

  addListeners() {
    if (this.el) {
      this.el.addEventListener("scroll", this.handleScroll)
    }
  }

  removeListeners() {
    if (this.el) {
      this.el.removeEventListener("scroll", this.handleScroll)
    }
  }

  startResetTimeout = () => {
    this.resetTimeout = setTimeout(this.handleReset, 1000)
  }

  clearResetTimeout = () => {
    if (this.resetTimeout) {
      clearTimeout(this.resetTimeout)
      this.resetTimeout = null
    }
  }

  handleReset = () => {
    const { onReset } = this.props
    onReset && onReset()
    this.el.scrollTop = 0
  }

  startCompleteTimeout = () => {
    this.completeTimeout = setTimeout(this.handleComplete, 250)
  }

  clearCompleteTimeout = () => {
    if (this.completeTimeout) {
      clearTimeout(this.completeTimeout)
      this.completeTimeout = null
    }
  }

  handleComplete = () => {
    const { onScrollTop } = this.props
    onScrollTop && onScrollTop()
  }

  handleScroll = (e) => {
    const st = e.target.scrollTop

    const pageHeight = this.pageHeight
    const { vh } = this.props

    this.clearCompleteTimeout()
    this.clearResetTimeout()

    if (st !== this.lastSt) {
      if (st + vh > pageHeight - vh) {
        // Can see spacer, but how much?
        let spacerDelta = st + vh - (pageHeight - vh)
        spacerDelta /= vh

        const spacerOpacity = Math.max(0.5, 1 - spacerDelta)

        this.setState({
          spacerOpacity: spacerOpacity,
        })
      }

      // Currently nothing to be done
      // When we reach the end of the page
      if (st >= pageHeight - vh) {
        // Show up icon if we are at bottom of page
        if (!this.state.atBottom) {
          this.setState({ atBottom: true })
        }
      } else {
        if (this.state.atBottom) {
          this.setState({ atBottom: false })
        }
      }

      // Scroll has changed and we are back at top
      // Fire timeout to enable scrolling back up page
      if (st === 0) {
        this.startCompleteTimeout()
      }

      this.lastSt = st
    }
  }

  getInnerRect = () => {
    this.pageHeight = parseInt(
      this.innerEl ? this.innerEl.getBoundingClientRect().height : 0,
      10
    )
  }

  addMouseMoveListener() {
    window.addEventListener("mousemove", this.handleMouseMove)
  }

  removeMouseMoveListener() {
    window.removeEventListener("mousemove", this.handleMouseMove)
  }

  startTick() {
    if (!this.rafId) {
      window.requestAnimationFrame(this.tick)
    }
  }

  tick = () => {
    this.tempUpX += (this.targetUpX - this.tempUpX) * 0.15
    this.tempUpY += (this.targetUpY - this.tempUpY) * 0.15

    this.setState({
      upX: this.tempUpX,
      upY: this.tempUpY,
    })

    this.rafId = window.requestAnimationFrame(this.tick)
  }

  cancelTick() {
    window.cancelAnimationFrame(this.rafId)
    this.rafId = null
  }

  handleMouseMove = (e) => {
    const { vh, vw } = this.props
    const offsetY = vh - vw * 0.22
    const padding = 16
    const tempScrollOffset = this.pageHeight - this.lastSt - vh
    const scrollOffset = isNaN(tempScrollOffset) ? 0 : tempScrollOffset

    this.targetUpX = e.pageX + padding
    this.targetUpY = e.pageY - offsetY + padding - scrollOffset

    if (this.state.overSpacer && !this.state.up) {
      this.setState({
        up: true,
      })
    }
  }

  handleSpacerMouseEnter = () => {
    this.setState({
      overSpacer: true,
    })
  }

  handleSpacerMouseLeave = () => {
    this.setState({
      overSpacer: false,
      up: false,
    })
  }

  handleSpacerClick = () => {
    const { beginExit, exit } = this.props

    if (!exit) {
      // Notify state we are exiting
      beginExit && beginExit()

      // Hide up
      this.setState({
        up: false,
        overSpacer: false,
      })

      // Begin timeout to reset to top
      this.startResetTimeout()
    }
  }

  render() {
    const { exit, active } = this.props
    const { up, upX, upY, spacerOpacity } = this.state
    const footerClassNames = classnames(
      {
        "main__footer--active": active,
        "main__footer--exit": exit,
      },
      "main__footer"
    )
    return (
      <div ref={(el) => (this.el = el)} className={footerClassNames}>
        <div
          style={{
            opacity: spacerOpacity,
          }}
          className="main__footer-overlay"
        ></div>
        <div ref={(el) => (this.innerEl = el)} className="main__footer-content">
          <ArtistListContainer forceEnabled={true} />
          <div
            onClick={this.handleSpacerClick}
            onMouseEnter={this.handleSpacerMouseEnter}
            onMouseLeave={this.handleSpacerMouseLeave}
            className="main__spacer"
          >
            <div
              style={{
                transform: `translate(${upX}px, ${upY}px)`,
              }}
              className={classnames(
                { "main__tooltip--active": up },
                "main__tooltip"
              )}
            >
              <UpSVG />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    active: getFooterActive(state),
    exit: getFooterExit(state),
    vw: getViewportWidth(state),
    vh: getViewportHeight(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    beginExit() {
      dispatch(setMainFooterExit(true))
    },
    onScrollTop() {
      dispatch(navOutArtists())
      dispatch(setMainFooterActive(false))
      dispatch(setScrollEnd(false))
    },
    onReset() {
      dispatch(navOutArtists())
      dispatch(setMainFooterActive(false))
      dispatch(setMainFooterExit(false))
      dispatch(setScrollEnd(false))
      dispatch(setPageScroll(0))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainFooter)

// WEBPACK FOOTER //
// ./src/components/main/main-footer.js
