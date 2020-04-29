import { COLORS, LANDSCAPE } from 'constants/theme'

import React from 'react'
import styled from 'styled-components'
import { HoverButton } from 'components/HoverButton'
import { Nav } from 'components/Menu/Nav'
import { Contacts } from 'components/Menu/Contacts'
import { tablet, mobile } from 'utils/CssUtils'
import { LogoIcon } from 'components/Icons/Logo'

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
    padding: 15px 30px 30px;
  `}

  ${LANDSCAPE.MOBILE} {
    display: none;
  }

  ${mobile`
    display: none;
  `}
`

export const StyledLogo = styled(LogoIcon)`
  transform: rotate(30deg);
`

export const Menu = () => (
  <Container>
    <HoverButton
      icon={<StyledLogo width="30px" />}
      link="/"
      content="Dream Team"
    />
    <Nav />
    <Contacts />
  </Container>
)
