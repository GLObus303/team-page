import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'constants/theme'
import { mobile } from 'utils/CssUtils'

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  transform: rotate(-90deg);

  ${mobile`
      transform: rotate(0deg);
    `}
`

const NavItem = styled.li`
  list-style: none;
  padding: 0 15px;
  text-transform: uppercase;
  font-size: 15px;
  border-right: 1px solid ${COLORS.GREY};
  color: ${COLORS.GREY};
  cursor: pointer;
  transition: color 0.2s linear;
  font-weight: 500;

  :hover {
    color: ${COLORS.BLACK};
  }

  :last-of-type {
    border: none;
  }
`

export const Nav = () => (
  <NavList>
    <NavItem>Contact</NavItem>
    <NavItem>Team</NavItem>
    <NavItem>Technologies</NavItem>
  </NavList>
)
