import { COLORS, Z_INDEX, TRANSITION } from 'constants/theme'

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  z-index: ${Z_INDEX.FRONT};
`

const Bar = styled.div`
  width: 40px;
  height: 4px;
  border-radius: 3px;
  background: ${COLORS.BLACK};
  margin-bottom: 6px;
  transition: all 0.5s ${TRANSITION.CUBIC};
`

const TopBar = styled(Bar)<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => isOpen && 'rotate(-45deg) translateY(14px)'};
`

const FadeBar = styled(Bar)<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => isOpen && 'translateX(100%)'};
  opacity: ${({ isOpen }) => isOpen && 0};
`

const BottomBar = styled(Bar)<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => isOpen && 'rotate(45deg) translateY(-14px)'};
`

export const BurgerMenu = ({ isOpen, onClick }) => (
  <Container onClick={onClick}>
    <TopBar isOpen={isOpen} />
    <FadeBar isOpen={isOpen} />
    <BottomBar isOpen={isOpen} />
  </Container>
)
