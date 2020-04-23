import React from 'react'
import styled from 'styled-components'
import { COLORS } from 'constants/theme'
import { mobile } from 'utils/CssUtils'
import { Contacts } from './Contacts'
import { useRouter } from 'next/dist/client/router'

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  transform: rotate(-90deg);

  ${mobile`
    transform: rotate(0deg);
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 70px 30px;
  `}
`

const NavItem = styled.li<{ active?: boolean }>`
  list-style: none;
  padding: 0 15px;
  text-transform: uppercase;
  font-size: 1.5rem;
  border-right: 1px solid ${COLORS.GREY};
  color: ${({ active }) => (active ? COLORS.BLACK : COLORS.GREY)};
  cursor: pointer;
  transition: color 0.2s linear;
  font-weight: 500;

  :hover {
    color: ${COLORS.BLACK};
  }

  :last-of-type {
    border: none;
  }

  ${mobile`
    border-right: none;
    padding: 15px 0;  
    width: 100%;
    text-align: right;
  `}
`

const MobileContacts = styled(Contacts)`
  display: none;
  position: absolute;

  ${mobile`
    display: flex;
    position: absolute;
    bottom: 15%;
    right: 30px;
  `}
`

export const Nav = () => {
  const { route } = useRouter()

  return (
    <NavList>
      <NavItem active={route === '/contact'}>Contact</NavItem>
      <NavItem active={route === '/team'}>
        <a href="/team">Team</a>
      </NavItem>
      <NavItem active={route === '/technologies'}>Technologies</NavItem>
      <MobileContacts />
    </NavList>
  )
}
