import { Z_INDEX, COLORS, LANDSCAPE, BREAKPOINT } from 'constants/theme'
import { Hexagon } from 'constants/hexagonShape'
import { TEAM } from 'constants/teamData'

import React, { useRef } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { TeamCard } from 'components/TeamCard'
import { Layout } from 'components/Layout'
import { HoverButton } from 'components/HoverButton'
import { mobile, tablet, laptop, smallMobile } from 'utils/CssUtils'
import { ArrowIcon } from 'components/Icons/Arrow'

const Container = styled.div`
  margin-left: 130px;
  height: 100%;
  position: relative;

  ${tablet`
    margin-left: 80px;
  `}

  ${LANDSCAPE.MOBILE} {
    margin-left: 0;
    position: unset;
  }

  ${mobile`
    margin-left: 0;
  `}
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);

  ${tablet`
    display: none;
  `};
`

const HoverButtonLeft = styled(HoverButton)`
  transform: rotate(180deg);
  padding-top: 13px;
`

const CustomSlider = styled(Slider)`
  z-index: ${Z_INDEX.BEHIND};

  .slick-track {
    display: flex;
  }

  .slick-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex !important;
    z-index: ${Z_INDEX.FRONT};

    ${laptop`
      bottom: 60px;
    `}

    ${tablet`
      bottom: 40px;
    `}

    @media screen and (orientation: landscape) and (max-width: ${
      BREAKPOINT.LAPTOP
    }px) {
      bottom: 40px;
    }

    ${LANDSCAPE.MOBILE} {
      bottom: 10px;
      position: fixed;
    }

    ${mobile`
      bottom: 14%;
    `}

    ${smallMobile`
      bottom: 50px;
    `}

    li {
      list-style: none;
      position: relative;
      overflow: visible;
      margin-right: 20px;

      :last-of-type {
        margin-right: 0;
      }
    }

    .slick-active {
      :before {
        content: '';
        width: 110px;
        height: 110px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        background: ${COLORS.BLACK};
        z-index: ${Z_INDEX.BASE_LEVEL};
        clip-path: ${Hexagon};

        ${LANDSCAPE.MOBILE} {
          width: 54px;
          height: 54px;
        }

        ${mobile`
          width: 54px;
          height: 54px;
        `}
      }
    }
  }
`

const CustomDot = styled.div<{ background: string }>`
  width: 100px;
  height: 100px;
  z-index: ${Z_INDEX.FRONT};
  clip-path: ${Hexagon};
  background-image: ${({ background }) => `url(${background})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: top;
  cursor: pointer;

  ${LANDSCAPE.MOBILE} {
    width: 50px;
    height: 50px;
  }

  ${mobile`
    width: 50px;
    height: 50px;
  `}
`

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: (index) => <CustomDot background={TEAM[index].image} />,
}

const Team = () => {
  const sliderRef = useRef<Slider>(null)
  const nextSlide = () => sliderRef.current?.slickNext()
  const prevSlide = () => sliderRef.current?.slickPrev()

  return (
    <Layout>
      <Container>
        <CustomSlider {...settings} ref={sliderRef}>
          {TEAM.map((person, index) => (
            <TeamCard {...person} key={person.lastName + index} />
          ))}
        </CustomSlider>
        <ButtonContainer>
          <HoverButtonLeft icon={<ArrowIcon />} onClick={prevSlide} />
          <HoverButton icon={<ArrowIcon />} onClick={nextSlide} />
        </ButtonContainer>
      </Container>
    </Layout>
  )
}

export default Team
