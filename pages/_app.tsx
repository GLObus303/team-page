import React from 'react'
import App from 'next/app'
import { GlobalStyles } from 'utils/GlobalStyles'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    return (
      <>
        <GlobalStyles />
        <Component {...pageProps} router={router} />
      </>
    )
  }
}

export default MyApp
