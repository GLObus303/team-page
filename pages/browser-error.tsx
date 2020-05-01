import { FONT_SIZE } from 'constants/theme'

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  font-size: ${FONT_SIZE.SMALL};
`

const Heading = styled.div`
  font-size: ${FONT_SIZE.SMALL};
  font-weight: black;
`

const DogImage = styled.img`
  margin-top: 50px;
  height: 150px;
`

const HelpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`

const BrowserLogo = styled.img`
  height: 50px;
  margin-top: 20px;
  transition: transform ease-in-out 150ms;

  :hover {
    transform: scale(1.3);
  }
`

const BrowserAnchor = styled.a`
  margin-right: 20px;

  :last-child {
    margin-right: 0px;
  }
`

const BrowserError = () => (
  <Container>
    <Box>
      <Heading>Your browser is unsupported.</Heading>
      <DogImage src="/images/dog.png" />
      <HelpContainer>
        Let us help you get a better browser.
        <div>
          <BrowserAnchor href="https://www.google.com/intl/en/chrome/">
            <BrowserLogo src="/images/chrome.png" />
          </BrowserAnchor>
          <BrowserAnchor href="https://brave.com/download/">
            <BrowserLogo src="/images/brave.png" />
          </BrowserAnchor>
          <BrowserAnchor href="https://www.mozilla.org/en-US/firefox/new/">
            <BrowserLogo src="/images/firefox.png" />
          </BrowserAnchor>
        </div>
      </HelpContainer>
    </Box>
  </Container>
)

export default BrowserError
