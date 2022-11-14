import React from "react"

/*import "../styles/logo.scss"*/
import "../styles/marquee.scss"
import { AppProps } from "next/app"
import "../styles/tailwind.scss"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
