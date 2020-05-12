import { COLORS, LANDSCAPE, FONT_SIZE } from 'constants/theme'

import React from 'react'
import styled from 'styled-components'
import { mobile } from 'utils/CssUtils'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

import { Contacts } from './Contacts'

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  transform: rotate(-90deg);

  ${LANDSCAPE.MOBILE} {
    transform: rotate(0deg);
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 50px 30px 0;
  }

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
  transform: translateZ(0);
  padding: 0 15px;
  text-transform: uppercase;
  font-size: ${FONT_SIZE.SMALL};
  color: ${({ active }) => (active ? COLORS.BLACK : COLORS.GREY)};
  cursor: pointer;
  transition: color 0.2s linear;

  :hover {
    color: ${COLORS.BLACK};
  }

  :last-of-type {
    border: none;
  }

  ${LANDSCAPE.MOBILE} {
    padding: 15px 0;
    width: 100%;
    text-align: right;
  }

  ${mobile`
    padding: 15px 0;  
    width: 100%;
    text-align: right;
  `}
`

const Separator = styled.div`
  width: 2px;
  height: 16px;
  background-color: ${COLORS.GREY};

  ${mobile`
    display: none;
  `}
`

const MobileContacts = styled(Contacts)`
  display: none;
  position: absolute;
  bottom: 15%;
  right: 30px;

  ${LANDSCAPE.MOBILE} {
    display: flex;
    bottom: 10px;
  }

  ${mobile`
    display: flex;
  `}
`

export const Nav = () => {
  const { route } = useRouter()

  return (
    <NavList>
      <NavItem active={route === '/contact'}>
        <a href="/contact">Contact</a>
      </NavItem>
      <Separator />
      <NavItem active={route === '/team'}>
        <Link href="/team">
          <a>Team</a>
        </Link>
      </NavItem>
      <Separator />
      <NavItem active={route === '/technologies'}>
        <a href="/technologies">Technologies</a>
      </NavItem>
      <MobileContacts />
    </NavList>
  )
}
