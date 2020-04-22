import React from 'react'
import styled from 'styled-components'
import { prop, tablet, mobile, smallMobile } from 'utils/CssUtils'
import { COLORS, FONT_SIZE } from 'constants/theme'

const StyledHeading = styled.h1`
  color: ${prop('color') || COLORS.BLACK};
  font-weight: 700;
  font-size: ${FONT_SIZE.HEADING};
  line-height: 6rem;
  text-align: left;

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

export const Heading: React.FC<{ color?: string; children: string }> = ({
  children,
  color,
}) => <StyledHeading color={color}>{children}</StyledHeading>
