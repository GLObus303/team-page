import {
  COLORS,
  FONT_SIZE,
  LANDSCAPE,
  FONT_WEIGHT,
  LINE_HEIGHT,
} from 'constants/theme'

import React from 'react'
import styled from 'styled-components'
import { prop, tablet, mobile, smallMobile } from 'utils/CssUtils'

const StyledHeading = styled.h1`
  color: ${prop('color') || COLORS.BLACK};
  font-weight: ${FONT_WEIGHT.BOLD};
  font-size: ${FONT_SIZE.HEADING};
  line-height: ${LINE_HEIGHT.HEADING};
  text-align: left;
  margin: 0 0 60px;

  ${tablet`
    font-size: ${FONT_SIZE.LARGE};
    line-height: ${LINE_HEIGHT.LARGE};
    margin: 0 0 30px;
  `}

  ${LANDSCAPE.MOBILE} {
    font-size: ${FONT_SIZE.LARGE};
    line-height: ${LINE_HEIGHT.LARGE};
  }

  ${mobile`
    font-size: ${FONT_SIZE.LARGE};
    line-height: ${LINE_HEIGHT.LARGE};
    margin: 0 0 20px;
  `}

  ${smallMobile`
    font-size: ${FONT_SIZE.MEDIUM};
    line-height: ${LINE_HEIGHT.MEDIUM};
  `}
`

interface HeadingProps {
  color?: string
  margin?: string
  children: string
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  color,
  margin,
}) => (
  <StyledHeading color={color} margin={margin}>
    {children}
  </StyledHeading>
)
