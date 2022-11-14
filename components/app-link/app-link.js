import React from 'react'
import { Link } from 'react-router-dom'

const AppLink = ({ children, transitionActive, dispatch, ...otherProps }) => (
  <Link 
    style={{
      pointerEvents: transitionActive ? 'none' : 'auto'
    }}
    {...otherProps} >
    {children}
  </Link>
)

export default AppLink



// WEBPACK FOOTER //
// ./src/components/app-link/app-link.js