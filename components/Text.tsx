import { COLORS, FONT_SIZE, LINE_HEIGHT, LANDSCAPE } from 'constants/theme'

import React from 'react'
import styled from 'styled-components'
import { prop, mobile, tablet } from 'utils/CssUtils'

const StyledText = styled.p`
  color: ${prop('color') || COLORS.BLACK};
  margin: ${({ margin }) => margin ?? 0};
  font-size: ${FONT_SIZE.BASE};
  line-height: ${LINE_HEIGHT.MEDIUM};
  margin: ${prop('margin')};

  ${tablet`
    font-size: ${FONT_SIZE.BASE};
    line-height: ${LINE_HEIGHT.BASE};
  `}

  ${LANDSCAPE.MOBILE} {
    font-size: ${FONT_SIZE.SMALL};
    line-height: ${LINE_HEIGHT.SMALL};
  }

  ${mobile`
    font-size: ${FONT_SIZE.SMALL};
    line-height: ${LINE_HEIGHT.SMALL};
  `}
`

interface TextProps {
  margin?: string
  size?: string
  color?: string
  children: string
  className?: string
}

export const Text: React.FC<TextProps> = ({
  children,
  margin,
  color,
  size,
  className,
}) => (
  <StyledText margin={margin} color={color} size={size} className={className}>
    {children}
  </StyledText>
)
