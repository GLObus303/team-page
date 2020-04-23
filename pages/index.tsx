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
  max-width: 39%;
  padding: 10% 0 0 15%;

  ${tablet`
    max-width:100%;
    padding: 0 80px 0 15%;
    margin-top: -50px;
    `}

  ${mobile`
    margin: auto 0 100px;
    padding: 0 30px;
    `}
`

const StyledButton = styled(Button)`
  ${mobile`
    display: none;
    `}
`

const Image = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 110%;
  transform: translateY(-17%) translateX(18%);
  clip-path: polygon(
    45% 1.33975%,
    46.5798% 0.60307%,
    48.26352% 0.15192%,
    50% 0%,
    51.73648% 0.15192%,
    53.4202% 0.60307%,
    55% 1.33975%,
    89.64102% 21.33975%,
    91.06889% 22.33956%,
    92.30146% 23.57212%,
    93.30127% 25%,
    94.03794% 26.5798%,
    94.48909% 28.26352%,
    94.64102% 30%,
    94.64102% 70%,
    94.48909% 71.73648%,
    94.03794% 73.4202%,
    93.30127% 75%,
    92.30146% 76.42788%,
    91.06889% 77.66044%,
    89.64102% 78.66025%,
    55% 98.66025%,
    53.4202% 99.39693%,
    51.73648% 99.84808%,
    50% 100%,
    48.26352% 99.84808%,
    46.5798% 99.39693%,
    45% 98.66025%,
    10.35898% 78.66025%,
    8.93111% 77.66044%,
    7.69854% 76.42788%,
    6.69873% 75%,
    5.96206% 73.4202%,
    5.51091% 71.73648%,
    5.35898% 70%,
    5.35898% 30%,
    5.51091% 28.26352%,
    5.96206% 26.5798%,
    6.69873% 25%,
    7.69854% 23.57212%,
    8.93111% 22.33956%,
    10.35898% 21.33975%
  );
  background-image: url('images/team.svg');
  background-repeat: no-repeat;
  background-size: 150%;
  background-position: 62% 20%;

  ${tablet`
    width: 100%;
    height: 70%;
    position: relative;
    display: block;
    transform: translateY(-18%) translateX(20%);
  `}

  ${mobile`
    margin: auto auto 0;
    transform: translateY(10%) translateX(0);
    background-position: 55% 32%;
    height: 70vw;
    max-height: 35vh;
    width: 80%;
`}
`

const Home = () => (
  <Layout>
    <Image />
    <Container>
      <Heading margin="0 0 24px 0">Hire us you dumb abc cunts</Heading>
      <Text margin="0 0 24px 0">
        You pay us good.. 6k per mday and tragic 3k for Nick cos he is a cheap
        ass fuck
      </Text>
      <StyledButton>Hire us</StyledButton>
    </Container>
  </Layout>
)

export default Home
