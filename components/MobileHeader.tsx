import React from 'react'
import styled from 'styled-components'
import { COLORS, FONT_WEIGHT } from 'constants/theme'
import { HoverButton } from 'components/HoverButton'
import { mobile } from 'utils/CssUtils'

const Container = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  width: 100%;

  ${mobile`
    display: flex;
    `}
`

const Content = styled.div`
  color: ${COLORS.BLACK};
  font-size: 20px;
  font-weight: ${FONT_WEIGHT.BOLD};
`

export const MobileHeader = () => (
  <Container>
    <HoverButton icon="light-bulb" />
    <Content>Motherfuckers</Content>
  </Container>
)
