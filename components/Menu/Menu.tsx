import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'constants/theme'
import { HoverButton } from 'components/HoverButton'
import { Nav } from 'components/Menu/Nav'
import { tablet, mobile } from 'utils/CssUtils'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 120px;
  background: ${COLORS.LIGHT_BLUE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 30px;

  ${tablet`
    width: 80px;  
    `}

  ${mobile`
    top: 100%;
    transform: translateY(-100%);
    width: 100%;  
    height: 100px;
    `}
`

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 130px;

  ${mobile`
      display: none;
    `}
`

const StyledHoverButton = styled(HoverButton)`
  ${mobile`
      display: none;
    `}
`

export const Menu = () => (
  <Container>
    <StyledHoverButton icon="light-bulb" />
    <Nav />
    <ContactContainer>
      <HoverButton icon="phone" />
      <HoverButton icon="mail" />
    </ContactContainer>
  </Container>
)
