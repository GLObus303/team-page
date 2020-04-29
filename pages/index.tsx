import { Hexagon } from 'constants/hexagonShape'
import { LANDSCAPE } from 'constants/theme'

import React from 'react'
import styled from 'styled-components'
import { Layout } from 'components/Layout'
import { Heading } from 'components/Heading'
import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { tablet, mobile } from 'utils/CssUtils'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 40%;
  padding: 10% 0 0 15%;

  ${tablet`
    max-width:100%;
    padding: 0 80px 0 15%;
  `}

  ${LANDSCAPE.MOBILE} {
    max-width: 55%;
    padding: 80px 20px 0;
  }

  ${mobile`
    padding: 0 30px;
  `}
`

const Image = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  padding-top: 70%;
  transform: translateY(-21%) translateX(18%);
  clip-path: ${Hexagon};
  background-image: url('images/team.svg');
  background-repeat: no-repeat;
  background-size: 150%;
  background-position: 65% -10%;

  ${tablet`
    position: relative;
    background-position: 50% 0%;
    transform: translate(0, 0);
    align-self: center;
    margin: 20px 0 100px 30px;
  `}

  ${LANDSCAPE.MOBILE} {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    padding-top: 60%;
    transform: translateY(-21%) translateX(18%);
    background-position: 65% -25%;
  }

  ${mobile`
    margin: 30px 0 50px;
    transform: translateY(10%) translateX(0);
    background-position: 55% 32%;
    padding-top: 70%;
    width: 80%;
`}
`

const Home = () => (
  <Layout>
    <Image />
    <Container>
      <Heading>Hire us you dumb abc cunts</Heading>
      <Text margin="0 0 24px 0">
        You pay us good.. 6k per mday and tragic 3k for Nick cos he is a cheap
        ass fuck
      </Text>
      <Button>Hire us</Button>
    </Container>
  </Layout>
)

export default Home
