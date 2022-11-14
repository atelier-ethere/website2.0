// src/components/app/index.js
import React, { Component } from "react"

import { connect } from "react-redux"

import {
  getScrollTop,
  getViewportWidth,
  getViewportHeight,
  getDocumentHeight,
} from "../../lib/util"
import {
  changeLocation,
  toggleDebug,
  updateScrollTop,
  updateViewportDimensions,
  updateDocumentHeight,
} from "./actions"
import "./app.scss"

class App extends Component {
  componentDidMount() {
    window.addEventListener("loadmedia", this.handleLoadMedia)
    window.addEventListener("internalscroll", this.handleInternalScroll)
    window.addEventListener("scroll", this.handleScroll)
    window.addEventListener("resize", this.handleResize)
    window.addEventListener("keyup", this.handleKeys)

    this.handleScroll()
    this.handleResize()

    this.props.history.listen((location) => {
      this.createResizeTimeout()
      this.props.onChangeLocation(location)
    })
  }

  componentWillUnmount() {
    window.removeEventListener("loadmedia", this.handleLoadMedia)
    window.removeEventListener("internalscroll", this.handleInternalScroll)
    window.removeEventListener("scroll", this.handleScroll)
    window.removeEventListener("resize", this.handleResize)
    window.removeEventListener("keyup", this.handleKeys)

    this.clearResizeTimeout()
  }

  clearResizeTimeout() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout)
      this.resizeTimeout = null
    }
  }

  createResizeTimeout() {
    this.resizeTimeout = setTimeout(this.handleResize, 250)
  }

  handleDebugKey() {
    const { onToggleDebug } = this.props
    onToggleDebug && onToggleDebug()
  }

  handleKeys = (e) => {
    const numOne = 49

    if (e.keyCode === numOne) {
      this.handleDebugKey()
    }
  }

  handleLoadMedia = () => {
    this.clearResizeTimeout()
    this.createResizeTimeout()
  }

  handleResize = () => {
    const vw = getViewportWidth()
    const vh = getViewportHeight()
    const dh = getDocumentHeight()

    if (vw !== this.vw || vh !== this.vh) {
      this.vw = vw
      this.vh = vh
      requestAnimationFrame(this.updateViewport)
    }

    if (dh !== this.dh) {
      this.dh = dh
      requestAnimationFrame(this.updateDocument)
    }
  }

  updateViewport = () => {
    const { onUpdateViewportDimensions } = this.props
    onUpdateViewportDimensions(this.vw, this.vh)
  }

  updateDocument = () => {
    const { onUpdateDocumentHeight } = this.props
    onUpdateDocumentHeight(this.dh)
  }

  handleInternalScroll = () => {
    const { onUpdateScroll } = this.props
    onUpdateScroll(getScrollTop())
  }

  handleScroll = () => {
    const t = getScrollTop()
    const { onUpdateScroll } = this.props

    if (this.st !== t) {
      this.st = t
      onUpdateScroll(t)
    }
  }

  updateScroll = () => {
    const { onUpdateScroll } = this.props
    onUpdateScroll(this.st)
  }

  render() {
    return <div className="app">{this.props.children}</div>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateScroll: (st) => {
      dispatch(updateScrollTop(st))
    },
    onUpdateViewportDimensions: (vw, vh) => {
      dispatch(updateViewportDimensions(vw, vh))
    },
    onUpdateDocumentHeight: (dh) => {
      dispatch(updateDocumentHeight(dh))
    },
    onToggleDebug: () => {
      dispatch(toggleDebug())
    },
    onChangeLocation: (location) => {
      dispatch(changeLocation(location))
    },
  }
}

export default connect(null, mapDispatchToProps)(App)

// WEBPACK FOOTER //
// ./src/components/app/index.js
