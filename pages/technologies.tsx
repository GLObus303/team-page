import { HexagonRotated } from 'constants/hexagonShape'
import { SUBJECTS } from 'constants/technologiesData'
import { FONT_SIZE, COLORS, TRANSITION, LANDSCAPE } from 'constants/theme'

import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { SubHeading } from 'components/SubHeading'
import { Text } from 'components/Text'
import { Techs } from 'components/Techs'
import { Layout } from 'components/Layout'
import { tablet, laptop, mobile } from 'utils/CssUtils'
import useDeviceType from 'utils/useDeviceType'

const rollUp = keyframes`
0%{
  transform: scale(0.1) rotate(360deg);
}

100%{
  transform: scale(1) rotate(0deg);
}
`

const Container = styled.div`
  margin: 0 80px 0 200px;
  height: 100%;

  ${laptop`
    margin: 0 30px 0 150px;
  `}

  ${tablet`
    margin: auto 80px auto 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}

  ${LANDSCAPE.MOBILE} {
    margin: 0;
  }

  ${mobile`
    margin: 0;
    justify-content: flex-start;
  `}
`

const TechCard = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 30px;

  ${tablet`
    display: flex;
    flex-direction: column;
    height: auto;
  `}

  ${LANDSCAPE.MOBILE} {
    flex-direction: row;
    align-items: flex-start;
    padding-top: 50px;
  }

  ${mobile`
    padding: 50px 12px 0;
  `}
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;
  animation: ${rollUp} 0.5s;

  ${LANDSCAPE.MOBILE} {
    width: 40%;
  }

  ${tablet`
    margin-bottom: 20px;
    width: 100%;
  `}

  ${mobile`
    margin-bottom: 5px;
  `}
`

const Image = styled.div<{ background?: string }>`
  clip-path: ${HexagonRotated};
  background-image: ${({ background }) => `url(${background})`};
  background-size: cover;
  width: 70%;
  padding-top: 70%;

  ${mobile`
    width: 50%;
    padding-top: 50%;
  `}
`

const BackgroundContainer = styled.div<{ rotate?: number }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  padding-top: 70%;
  transition: all 0.2s ${TRANSITION.CUBIC};

  ${mobile`
    width: 50%;
    padding-top: 50%;
  `}
`

const BackgroundImage = styled.div`
  clip-path: ${HexagonRotated};
  background: #ffb8b8;
  width: 50%;
  padding-top: 50%;
  position: absolute;
  top: 2%;
  left: -20%;

  ${mobile`
    left: 0;
    top: -5%;
  `}
`

const BackgroundImage2 = styled.div`
  clip-path: ${HexagonRotated};
  background: #a3b9fe;
  width: 100%;
  padding-top: 100%;
  position: absolute;
  top: 5%;
  left: -10%;
`

const BackgroundImage3 = styled.div`
  clip-path: ${HexagonRotated};
  background: #e9f3ec;
  width: 40%;
  padding-top: 40%;
  position: absolute;
  top: 50%;
  right: -10%;
  transform: translateY(-50%);
`

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding-top: 3%;

  ${tablet`
    width: 100%;
  `}

  ${LANDSCAPE.MOBILE} {
    padding-top: 0;
  }

  ${mobile`
    padding-top: 0;
  `}
`

const SubTitle = styled.h3<{ isCentered?: boolean; margin?: string }>`
  font-size: ${FONT_SIZE.BASE};
  margin-bottom: ${({ margin }) => margin};
  text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};

  ${laptop`
    font-size: ${FONT_SIZE.SMALL};
  `}

  ${LANDSCAPE.MOBILE} {
    display: none;
  }

  ${mobile`
    display: none;
  `}
`

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  padding: 40px 0;
  height: 40%;

  ${tablet`
    height: 20%;
    margin-bottom: 50px;
  `}

  ${LANDSCAPE.MOBILE} {
    position: absolute;
    bottom: 2%;
    left: 5%;
    width: 40%;
    margin-bottom: 0;
  }

  ${mobile`
    margin-bottom: 0;
    position: absolute;
    bottom: 10%;
    left: 0;
    width: 100%;
  `}
`

const BadgeIcon = styled.img`
  width: 50px;
  margin-bottom: 20px;
  filter: invert(1);
  transition: all 0.2s ease-in;

  ${tablet`
    max-width: 30px;
    margin-bottom: 10px;
  `}

  ${LANDSCAPE.MOBILE} {
    width: 20px;
    margin-bottom: 0;
  }

  ${mobile`
    width: 20px;
    margin-bottom: 0;
  `}
`

const TechBadge = styled.div<{ isActive?: boolean }>`
  clip-path: ${HexagonRotated};
  background: ${COLORS.BLACK};
  color: ${({ isActive }) => (isActive ? COLORS.BLACK : COLORS.WHITE)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 15%;
  width: 15%;
  margin: 0 -1.5%;
  position: relative;
  transition: all 0.2s ease-in;
  cursor: pointer;

  :nth-of-type(even) {
    margin-bottom: 7%;
  }

  :nth-of-type(odd) {
    margin-top: 7%;
  }

  :before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    padding-top: 98%;
    width: 98%;
    transform: translate(-50%, -50%);
    clip-path: ${HexagonRotated};
    background: ${({ isActive }) => (isActive ? COLORS.WHITE : COLORS.BLACK)};
    transition: all 0.2s ease-in;
  }

  ${BadgeIcon} {
    filter: ${({ isActive }) => (isActive ? 'invert(0)' : 'invert(1)')};
  }

  ${tablet`
    padding-top: 18%;
    width: 18%;
  `}

  ${mobile`
    padding-top: 15%;
    width: 15%;
  `}
`

const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Technologies = () => {
  const [active, setActive] = useState(0)
  const { title, subTitle, content, techs, image } = SUBJECTS[active]
  const { isMobile } = useDeviceType()

  return (
    <Layout>
      <Container>
        <TechCard>
          <ImageContainer key={title}>
            <BackgroundContainer>
              <BackgroundImage2 />
              <BackgroundImage3 />
              <BackgroundImage />
            </BackgroundContainer>
            <Image background={`images/${image}`} />
          </ImageContainer>
          <Content>
            <SubTitle margin="20px">{subTitle}</SubTitle>
            <SubHeading margin="0 0 10px">{title}</SubHeading>
            <Text margin={isMobile ? '0 0 5px' : '0 0 20px'}>{content}</Text>
            <Techs techs={techs} />
          </Content>
        </TechCard>
        <SelectContainer>
          {SUBJECTS.map(({ title: badgeTitle, icon }, index) => (
            <TechBadge
              key={badgeTitle}
              onClick={() => setActive(index)}
              isActive={index === active}
            >
              <TechContainer>
                <BadgeIcon src={`icons/${icon}.svg`} />
                <SubTitle isCentered>{badgeTitle}</SubTitle>
              </TechContainer>
            </TechBadge>
          ))}
        </SelectContainer>
      </Container>
    </Layout>
  )
}

export default Technologies
