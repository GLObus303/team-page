import React from 'react'
import styled from 'styled-components'
import Mail from 'public/icons/mail.svg'
import Phone from 'public/icons/phone.svg'
import LightBulb from 'public/icons/light-bulb.svg'
import { COLORS, Z_INDEX } from 'constants/theme'

const StyledSVG = styled.span<{ width?: string; color?: string }>`
  display: inline-flex;
  max-width: 100%;
  max-height: 100%;
  z-index: ${Z_INDEX.FRONT};

  svg {
    width: ${({ width }) => width || 18}px;
    fill: ${({ color }) => color || COLORS.WHITE};
  }
`

interface IconProps {
  type: string
  width?: string
  color?: string
}

const Icons: { [key: string]: React.ReactNode } = {
  mail: <Mail />,
  phone: <Phone />,
  'light-bulb': <LightBulb />,
}

export const Icon: React.FC<IconProps> = ({ type, width, color }) => (
  <StyledSVG width={width} color={color}>
    {Icons[type]}
  </StyledSVG>
)
