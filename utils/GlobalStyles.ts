import { FONT_SIZE } from 'constants/theme'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Roboto'), local('Roboto-Regular'), url('/fonts/roboto_regular.woff2') format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

 @font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
 }

  input, textarea {
    font-family: 'Roboto',sans-serif;;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html {
		font-size: 62.5%;
	}

  body {
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    font-size: inherit;
    cursor: pointer;
  }

  h1 {
    font-size: ${FONT_SIZE.LARGE};
    letter-spacing: 1.5px;
    line-height: 3.9rem;
    text-align: center;
  }

  h2 {
    font-size: ${FONT_SIZE.MEDIUM}; 
    line-height: 2.9rem;
  }

  p {
    line-height: ${FONT_SIZE.BASE};
    letter-spacing: 0.5px;
  }
`
