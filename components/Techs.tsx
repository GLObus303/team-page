import { LANDSCAPE } from 'constants/theme'

import React from 'react'
import styled from 'styled-components'
import { tablet, mobile } from 'utils/CssUtils'
import { TechsInterface } from 'components/TeamCard'

const Container = styled.div`
  display: flex;
`

const Logo = styled.img<{ isVertical?: boolean }>`
  max-height: 60px;
  margin-right: 30px;

  ${tablet`
    margin-right: 10px;
    max-height: 50px;
  `}

  ${LANDSCAPE.MOBILE} {
    max-height: 40px;
    margin-right: 20px;
  }

  ${mobile`
    max-height: 40px;
    margin-right: 5px;
  `}
`

interface TechsProps {
  techs: TechsInterface[]
  className?: string
}

export const Techs: React.FC<TechsProps> = ({ techs, className }) => (
  <Container className={className}>
    {techs.map(({ logo, name }) => (
      <Logo src={logo} alt={name} key={name} title={name} />
    ))}
  </Container>
)
