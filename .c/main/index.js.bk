import React from "react"

import classnames from "classnames"
import { connect } from "react-redux"
import { Route } from "react-router-dom"

import App from "../app"
import { getPreventScroll } from "../app/selectors"
import ArtistMenuPage from "../artist-menu-page"
import ArtistPage from "../artist-page"
import HomePage from "../home-page"
import InfoPage from "../info-page"
import ItemPage from "../item-page"
import ItemSubPage from "../item-sub-page"
import LightboxCollectionPage from "../lightbox-collection-page"
import LightboxSubCollectionPage from "../lightbox-sub-collection-page"
import Navigation from "../navigation"
import PageNotFound from "../page-not-found"
import HeroFooter from "./hero-footer"
import MainFooter from "./main-footer"

import "./main.css"

const mapStateToProps = (state) => {
  return {
    preventScroll: getPreventScroll(state),
  }
}

const Main = ({ match, preventScroll }) => {
  return (
    <div className="main">
      <div
        className={classnames({ "no-scroll": preventScroll }, "page-layers")}
      >
        <HeroFooter match={match} />
        <MainFooter />
        <Route path={`${match.url}`} component={App} />

        <Route
          path={`${match.url}`}
          children={({ match, ...props }) => (
            <HomePage match={match} {...props} />
          )}
        />

        <Route
          exact
          path={`${match.url}artists`}
          children={({ match, ...props }) => (
            <ArtistMenuPage match={match} {...props} />
          )}
        />

        <Route
          path={`${match.url}artists/:artistId`}
          children={({ match, ...props }) => (
            <ArtistPage match={match} {...props} />
          )}
        />

        <Route
          path={`${match.url}collections/:collectionId`}
          children={({ match, ...props }) => (
            <ItemPage match={match} {...props} />
          )}
        />

        <Route
          path={`${match.url}artists/:artistId/collections/:collectionId`}
          children={({ match, ...props }) => (
            <ItemSubPage match={match} {...props} />
          )}
        />

        <Route
          path={`${match.url}contact`}
          children={({ match, ...props }) => (
            <InfoPage match={match} {...props} />
          )}
        />

        <Route component={Navigation} path="/" />

        <Route
          path={`${match.url}collections/:collectionId/:index`}
          children={({ match, ...props }) => (
            <LightboxCollectionPage match={match} {...props} />
          )}
        />

        <Route
          path={`${match.url}artists/:artistId/collections/:collectionId/:index`}
          children={({ match, ...props }) => (
            <LightboxSubCollectionPage match={match} {...props} />
          )}
        />

        <Route page="*" component={PageNotFound} />
      </div>
    </div>
  )
}

// export default hot(module)(connect(mapStateToProps, null)(Main))
export default connect(mapStateToProps, null)(Main)

// WEBPACK FOOTER //
// ./src/components/main/index.js
