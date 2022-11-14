import React, { Component } from 'react'
import classnames from 'classnames'
import LogoSVG from '../logo/logo-svg'
import insertBreak from '../../lib/insertBreak'
import './overlay-heading.css'

export default class OverlayHeading extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: -1,
      animate: false
    }
  }

  componentDidMount() {
    const { active } = this.props

    if (active) {
      this.initHeading()
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      disabled: nextDisabled,
      active: nextActive
    } = nextProps
    const {
      disabled: prevDisabled,
      active: prevActive
    } = this.props


    if (nextActive !== prevActive) {
      if (nextActive) { 
        this.initHeading()
      } else {
        this.destroyHeading()
      }
    }

    if (nextDisabled !== prevDisabled) {
      if (nextDisabled) {
        this.destroyHeading()
      }
    }
  }

  componentWillUnmount() {
    this.destroyHeading()
  }

  initHeading() {
    if (this.init) {
      return
    }
    if (this.props.disabled) {
      return
    }

    this.setState({
      index: -1,
      animate: false
    })
    this.startDisplayTimeout(true)
    this.init = true
  }

  destroyHeading() {
    this.clearDisplayTimeout()
    this.clearAnimateTimeout()
    this.init = false
  }

  startAnimateTimeout() {
    this.animateTimeout = setTimeout(this.handleAnimateUpdate, 80)
  }

  clearAnimateTimeout() {
    if (this.animateTimeout) {
      clearTimeout(this.animateTimeout)
      this.animateTimeout = null
    }
  }

  handleAnimateUpdate = () => {
    this.setState({ animate: true })
  }

  startDisplayTimeout(immediate) {
    this.displayTimeout = setTimeout(this.handleDisplayUpdate, immediate ? 200 : 4000)
  }

  clearDisplayTimeout() {
    if (this.displayTimeout) {
      clearTimeout(this.displayTimeout)
      this.displayTimeout = null
    }
  }

  handleDisplayUpdate = () => {
    const { index } = this.state
    
    if (index >= this.getList().length - 1) {
      this.clearDisplayTimeout()
      return
    }

    this.setState({
      index: (index + 1),
      animate: false
    })

    this.startDisplayTimeout()
    this.startAnimateTimeout()
  }

  getList() {
    const { title, subtitle } = this.props
    const list = []
    if (title) list.push(title)
    if (subtitle) list.push(subtitle)
    list.push(<LogoSVG />)
    return list
  }


  getTextFromList() {
    const { index } = this.state
    const list = this.getList()

    if (index < 0) {
      return null
    }

    if (index === list.length - 1) {
      return list[index]
    } else {
      return <span dangerouslySetInnerHTML={{ __html: insertBreak(list[index], '&#038;') }} />
    }
  }

  render() {
    const { disabled, vh } = this.props 
    const { animate } = this.state
    const textFromList = this.getTextFromList()

    return (disabled ? 
      null :
      <div className="overlay-heading" style={{ height: vh }}>
        <div className={classnames({'overlay-heading__text--appear': animate}, 'overlay-heading__text', 'text--headline')}>{textFromList}</div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/components/overlay-heading/overlay-heading.js