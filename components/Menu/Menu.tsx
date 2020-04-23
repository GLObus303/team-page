import { COLORS } from 'constants/theme'

import React from 'react'
import styled from 'styled-components'
import { HoverButton } from 'components/HoverButton'
import { Nav } from 'components/Menu/Nav'
import { Contacts } from 'components/Menu/Contacts'
import { tablet, mobile } from 'utils/CssUtils'

const Container = styled.div`
  position: fixed;
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
    height: 60px;
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
    <StyledHoverButton icon="light-bulb" link="/" content="Dream Team" />
    <Nav />
    <Contacts />
  </Container>
)
