import React from 'react'
import App from 'next/app'
import { GlobalStyles } from 'utils/GlobalStyles'
import Router from 'next/router'

const isIE = () => {
  if (process.browser) {
    return (
      window.navigator.userAgent.indexOf('MSIE ') > -1 ||
      window.navigator.userAgent.indexOf('Trident/') > -1
    )
  }

  return false
}

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    if (isIE() && router.route !== '/browser-error') {
      Router.push('browser-error')
    }

    return (
      <>
        <GlobalStyles />
        <Component {...pageProps} router={router} />
      </>
    )
  }
}

export default MyApp
