import {
  COLORS,
  FONT_SIZE,
  LANDSCAPE,
  FONT_WEIGHT,
  LINE_HEIGHT,
} from 'constants/theme'

import React from 'react'
import styled from 'styled-components'
import { prop, tablet, mobile } from 'utils/CssUtils'

const Heading = styled.h2`
  color: ${prop('color') || COLORS.BLACK};
  font-weight: ${FONT_WEIGHT.BOLD};
  font-size: ${FONT_SIZE.LARGE};
  line-height: ${LINE_HEIGHT.LARGE};
  text-align: left;
  margin: ${prop('margin')};

  ${tablet`
    font-size: ${FONT_SIZE.MEDIUM};
    line-height: ${LINE_HEIGHT.MEDIUM};
  `}

  ${LANDSCAPE.MOBILE} {
    font-size: ${FONT_SIZE.BASE};
    line-height: ${LINE_HEIGHT.BASE};
  }

  ${mobile`
    font-size: ${FONT_SIZE.BASE};
    line-height: ${LINE_HEIGHT.BASE};
  `}
`

interface SubHeadingProps {
  color?: string
  margin?: string
  children: string
}

export const SubHeading: React.FC<SubHeadingProps> = ({
  children,
  color,
  margin,
}) => (
  <Heading color={color} margin={margin}>
    {children}
  </Heading>
)
