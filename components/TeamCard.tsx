import React from 'react'
import styled from 'styled-components'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { Techs } from 'components/Techs'
import { TeamCardProps } from 'pages/team'
import { tablet, mobile, smallMobile, notebook } from 'utils/CssUtils'
import useDeviceType from 'utils/useDeviceType'
import { FONT_SIZE } from 'constants/theme'
import { Hexagon } from 'constants/hexagon'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px 100px;

  ${tablet`
    flex-direction: column;
    justify-content: flex-start;
  `}

  ${mobile`
    padding: 0 20px 100px;
  `}
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

  ${smallMobile`
    margin-top: 80px;
  `}
`

const Picture = styled.div<{ background: string }>`
  width: 50%;
  height: 75%;
  clip-path: ${Hexagon};
  background-image: ${({ background }) => `url(${background})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  ${tablet`
    order: -1;
    width: 80%;
    height: 42%;
    margin-top: 50px;
  `}

  ${mobile`
    width: 42vw;
    height: 40vw;
    margin-top: 60px;
  `}

  ${smallMobile`
    display: none;
  `} 
`

const SubHeading = styled.h2`
  font-size: 4rem;
  line-height: 5rem;

  ${mobile`
    font-size: 2.4rem;
    line-height: 3rem;
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
  `}

  ${mobile`
    max-width: 30px;
  `}
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${tablet`
    justify-content: flex-start;
  `}
`

const CustomText = styled(Text)`
  ${notebook`
    font-size: ${FONT_SIZE.MEDIUM};
    line-height: 2rem;
  `}

  ${mobile`
      font-size: 1.2rem;
      line-height: 1.4rem;
  `}
`

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
        <Heading margin={isMobile ? '0 0 20px 0' : '0 0 50px 0'}>
          {lastName}
        </Heading>
        <SubHeading>{position}</SubHeading>
        <CustomText margin={isMobile ? '0 0 20px 0' : '0 0 50px 0'}>
          {description}
        </CustomText>
        <Techs techs={techs} />
      </Info>
      <Picture background={image} />
    </Container>
  )
}
