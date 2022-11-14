import { connect } from 'react-redux'
import {
  getTransitionActive
} from '../app/selectors'

import AppLink from './app-link'

const mapStateToProps = state => {
  return {
    transitionActive: getTransitionActive(state)
  }
}

export default connect(mapStateToProps, null)(AppLink