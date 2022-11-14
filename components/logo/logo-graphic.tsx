import React, { Component } from "react"

import LogoSVG from "./logo-svg"

const getTargetScale = () =>
  Math.min(0.7, Math.max(300 / window.innerWidth, 0.3))

export default class LogoGraphic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      targetScale: getTargetScale(),
    }
    this.onResize = this.onResize.bind(this)
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.st !== this.props.st) return true
    if (nextProps.vh !== this.props.vh) return true
    if (nextProps.vw !== this.props.vw) return true
    if (nextProps.colour !== this.props.colour) return true
    return false
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize)
  }

  onResize() {
    this.setState({
      targetScale: getTargetScale(),
    })
  }

  render() {
    const { colour, animate, st, vh, vw } = this.props

    const threshold = 0.5
    let delta = (st - vh * threshold) / vh
    delta = delta + 0.5 // 0 to 1
    delta = Math.max(0, Math.min(1, delta))

    if (!animate) {
      delta = 0
    }

    if (isNaN(delta)) return null

    const { targetScale } = this.state

    const targetScaleInv = 1 - targetScale
    const scale = 1 - targetScaleInv * delta
    const x = scale

    const targetY = 0.5
    const targetX = 0.1
    const deltaInv = 1 - delta

    const yPx = vh * targetY * deltaInv
    const xPx = vw * targetX * deltaInv

    const ty = parseInt(yPx - xPx, 10)

    const style = {
      transform: `translate3d(0, ${ty}px, 0) scale(${x})`,
    }

    return (
      <div style={style} className="logo__graphic">
        <LogoSVG colour={colour} />
      </div>
    )
  }
}
