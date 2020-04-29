import { COLORS, Z_INDEX } from 'constants/theme'

import React from 'react'
import styled from 'styled-components'

const StyledSvg = styled.svg`
  fill: ${({ color }) => color ?? COLORS.WHITE};
  min-height: ${({ width }) => width ?? '18px'};
  min-width: ${({ height }) => height ?? '18px'};
  z-index: ${Z_INDEX.FRONT};
`

export const Icon = ({
  width,
  height,
  color,
  className,
  children,
  ...props
}) => (
  <StyledSvg
    height={height}
    width={width}
    preserveAspectRatio="xMidYMid meet"
    className={className}
    {...props}
  >
    {children}
  </StyledSvg>
)
