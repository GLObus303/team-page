import React from 'react'
import styled from 'styled-components'
import { prop, smallMobile } from 'utils/CssUtils'
import { COLORS, FONT_SIZE } from 'constants/theme'

const StyledText = styled.p`
  color: ${prop('color') || COLORS.BLACK};
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  margin: ${({ margin }) => margin ?? 0};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  font-size: ${({ size }) => FONT_SIZE[size] ?? FONT_SIZE.LARGE};
  text-align: ${prop('align')};
  line-height: 3rem;

  ${smallMobile`
      font-size: ${FONT_SIZE.BASE};
      line-height: 1.8rem;
    `}
`

export const Text = ({ children, ...props }) => (
  <StyledText {...props}>{children}</StyledText>
)
