import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'constants/theme'

const StyledButton = styled.button<{
  isInverted?: boolean
  centered?: boolean
}>`
  background: ${({ isInverted }) => (isInverted ? COLORS.WHITE : COLORS.BLACK)};
  border: ${COLORS.BLACK} solid 2px;
  border-radius: 16px;
  color: ${({ isInverted }) => (isInverted ? COLORS.BLACK : COLORS.WHITE)};
  cursor: pointer;
  font-size: 2.4rem;
  padding: 16px 60px;
  min-width: 150px;
  margin: ${({ centered }) => (centered ? '0 auto' : 0)};
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
