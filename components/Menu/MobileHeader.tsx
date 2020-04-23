import { TRANSITION, COLORS } from 'constants/theme'

import React, { useState } from 'react'
import styled from 'styled-components'
import { HoverButton } from 'components/HoverButton'
import { mobile } from 'utils/CssUtils'
import { Nav } from 'components/Menu/Nav'

import { BurgerMenu } from './BurgerMenu'

const Container = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  ${mobile`
    display: flex;
  `}
`

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  width: 80vw;
  height: 100vh;
  box-shadow: 0 0 10px ${COLORS.GREY};
  background-color: ${COLORS.WHITE};
  transition: transform 0.5s ${TRANSITION.CUBIC};
`

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenChange = () => setIsOpen((prevIsOpen) => !prevIsOpen)

  return (
    <Container>
      <HoverButton icon="light-bulb" />
      <BurgerMenu isOpen={isOpen} onClick={handleOpenChange} />
      <MobileMenu isOpen={isOpen}>
        <Nav />
      </MobileMenu>
    </Container>
  )
}
