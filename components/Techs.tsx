import React from 'react'
import styled from 'styled-components'
import { tablet, mobile } from 'utils/CssUtils'

const Container = styled.div`
  display: flex;

  ${tablet`
    position: absolute;
    top: 0;
    right: -25%;
    flex-direction: column;
  `}

  ${mobile`
    right: -30%;
  `}
`

const Logo = styled.img`
  max-height: 70px;
  margin-right: 30px;

  ${tablet`
    margin-right: 0;
    margin-bottom: 20px;
`}

  ${mobile`
    max-height: 40px;
`}
`

const TECH_LIST = {
  react: {
    name: 'react',
    logo: 'images/react.svg',
  },
  redux: {
    name: 'redux',
    logo: 'images/redux.svg',
  },
  jest: {
    name: 'jest',
    logo: 'images/jest.svg',
  },
  docker: {
    name: 'docker',
    logo: 'images/docker.svg',
  },
  cypress: {
    name: 'cypress',
    logo: 'images/cypress.svg',
  },
  vue: {
    name: 'vue',
    logo: 'images/vue.svg',
  },
}

export const Techs: React.FC<{ techs: string[] }> = ({ techs }) => (
  <Container>
    {techs.map((tech) => (
      <Logo
        src={TECH_LIST[tech].logo}
        alt={TECH_LIST[tech].name}
        key={TECH_LIST[tech].name}
        title={TECH_LIST[tech].name}
      />
    ))}
  </Container>
)
