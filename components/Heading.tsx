import { COLORS, FONT_SIZE } from 'constants/theme'

import React from 'react'
import styled from 'styled-components'
import { prop, tablet, mobile, smallMobile } from 'utils/CssUtils'

const StyledHeading = styled.h1`
  color: ${prop('color') || COLORS.BLACK};
  font-weight: 700;
  font-size: ${FONT_SIZE.HEADING};
  line-height: 6rem;
  text-align: left;
  margin: ${prop('margin')};

  ${tablet`
      font-size: 5rem;
    `}

  ${mobile`
      font-size: 3.6rem;
      line-height: 3.6rem;
    `}

  ${smallMobile`
      font-size: 2.6rem;
      line-height: 2.6rem;
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
