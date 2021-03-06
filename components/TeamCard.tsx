import { LANDSCAPE } from 'constants/theme'
import { Hexagon } from 'constants/hexagonShape'

import React from 'react'
import styled from 'styled-components'
import { Heading } from 'components/Heading'
import { SubHeading } from 'components/SubHeading'
import { Text } from 'components/Text'
import { Techs } from 'components/Techs'
import { tablet, mobile, smallMobile, laptop } from 'utils/CssUtils'
import useDeviceType from 'utils/useDeviceType'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px 100px;

  ${tablet`
    padding: 0 20px 150px;
    flex-direction: column;
    justify-content: flex-start;
    `}

  ${LANDSCAPE.MOBILE} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 50px 20px 0;
  }
`

const Info = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 50%;
  padding-right: 5%;

  ${tablet`
    max-width: 75%;
    margin-right: auto;
    position: relative;
    margin-top: 30px;
  `}

  ${LANDSCAPE.MOBILE} {
    max-width: 50%;
    margin-right: unset;
  }

  ${mobile`
    margin-top: 10px;
  `}

  ${smallMobile`
    margin-top: 80px;
  `}
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${tablet`
    justify-content: flex-start;
  `}

  ${LANDSCAPE.MOBILE} {
    display: none;
  }

  ${mobile`
    display: none;
  `}
`

const Picture = styled.div<{ background: string }>`
  width: 45%;
  padding-top: 40%;
  clip-path: ${Hexagon};
  background-image: ${({ background }) => `url(${background})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: top;

  ${laptop`
    width: 350px;
    height: 350px;
  `}

  ${tablet`
    order: -1;
    width: 70%;
    padding-top: 65%;
    margin-top: 50px;
  `}

  ${LANDSCAPE.MOBILE} {
    width: 50%;
    height: 250px;
    padding-top: 45%;
    order: 0;
    width: 60%;
    margin-top: 0;
  }

  ${mobile`
    width: 60%;
    padding-top: 0;
    height: 40%;
    margin-top: 60px;
  `}

  ${smallMobile`
    display: none;
  `}
`

const SocialLink = styled.img`
  max-width: 50px;
  transition: transform 0.3s ease-in;

  :hover {
    transform: scale(1.1);
  }

  ${tablet`
    margin-left: 20px;
    max-width: 40px;
  `}

  ${LANDSCAPE.MOBILE} {
    max-width: 30px;
  }

  ${mobile`
    margin-left: 10px;
    max-width: 30px;
  `}
`

const LastNameWrapper = styled.div`
  ${LANDSCAPE.MOBILE} {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  ${mobile`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `};
`

const SocialWrapper = styled.a`
  display: none;

  ${LANDSCAPE.MOBILE} {
    display: block;
  }

  ${mobile`
    display: block;
  `};
`

const StyledTechs = styled(Techs)`
  ${tablet`
    position: absolute;
    top: 0;
    right: -25%;
    flex-direction: column;
  `}

  ${LANDSCAPE.MOBILE} {
    flex-direction: row;
    position: static;
  }

  ${mobile`
    right: -30%;
  `}

  img {
    ${tablet`
    margin-bottom: 10px;
  `}
  }
`

export interface TechsInterface {
  name: string
  logo: string
}
export interface TeamCardProps {
  firstName: string
  lastName: string
  position: string
  description: string
  techs: TechsInterface[]
  image: string
  linkedIn: string
}

export const TeamCard: React.FC<TeamCardProps> = ({
  firstName,
  lastName,
  position,
  description,
  techs,
  image,
  linkedIn,
}) => {
  const { isMobile } = useDeviceType()

  return (
    <Container>
      <Info>
        <Wrapper>
          <SubHeading>{firstName}</SubHeading>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            <SocialLink src="icons/linkedin.svg" />
          </a>
        </Wrapper>
        <LastNameWrapper>
          <Heading margin={!isMobile && '0 0 50px 0'}>{lastName}</Heading>
          <SocialWrapper
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialLink src="icons/linkedin.svg" />
          </SocialWrapper>
        </LastNameWrapper>

        <SubHeading>{position}</SubHeading>
        <Text margin={isMobile ? '5px 0 0 0' : '0 0 50px 0'}>
          {description}
        </Text>
        <StyledTechs techs={techs} />
      </Info>
      <Picture background={image} />
    </Container>
  )
}
