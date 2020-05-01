import {
  COLORS,
  LANDSCAPE,
  FONT_SIZE,
  LINE_HEIGHT,
  BORDER_RADIUS,
} from 'constants/theme'

import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  isInverted?: boolean
  centered?: boolean
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  background: ${({ isInverted }) => (isInverted ? COLORS.WHITE : COLORS.BLACK)};
  border: ${COLORS.BLACK} solid 2px;
  border-radius: ${BORDER_RADIUS.MAIN};
  color: ${({ isInverted }) => (isInverted ? COLORS.BLACK : COLORS.WHITE)};
  cursor: pointer;
  font-size: ${FONT_SIZE.BASE};
  line-height: ${LINE_HEIGHT.BASE};
  padding: 10px 30px;
  transition: background-color 0.2s ease-in-out;
  box-sizing: border-box;

  :disabled {
    color: ${COLORS.GREY};
    cursor: default;
  }

  :enabled:hover {
    box-sizing: border-box;
    border: ${({ isInverted }) =>
      `2px ${isInverted ? 'solid' : 'dashed'} ${COLORS.BLACK}`};
    background: ${({ isInverted }) =>
      isInverted ? COLORS.BLACK : COLORS.WHITE};
    color: ${({ isInverted }) => (isInverted ? COLORS.WHITE : COLORS.BLACK)};
  }

  ${LANDSCAPE.MOBILE} {
    padding: 12px 30px;
    margin-bottom: 20px;
  }
`

interface ButtonProps {
  isDisabled?: boolean
  isInverted?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isDisabled,
  isInverted,
  onClick,
  type,
  ...props
}) => (
  <StyledButton
    isInverted={isInverted}
    disabled={isDisabled}
    onClick={onClick}
    type={type}
    {...props}
  >
    {children}
  </StyledButton>
)
