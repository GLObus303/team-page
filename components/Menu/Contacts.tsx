import React from 'react'
import styled from 'styled-components'
import { HoverButton } from 'components/HoverButton'
import { mobile } from 'utils/CssUtils'

const Container = styled.div<{ className?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  height: 130px;
`

const Content = styled.a`
  display: none;
  margin-right: 20px;
  font-size: 2rem;

  ${mobile`
    display: inline;
  `}
`

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Contacts: React.FC<{ className?: string }> = ({ className }) => (
  <Container className={className}>
    <Wrapper>
      <Content>+420 608380706</Content>
      <HoverButton icon="phone" content="608380706" />
    </Wrapper>
    <Wrapper>
      <Content>nikstepwn@gmail.com</Content>
      <HoverButton icon="mail" content="nikstepwn@gmail.com" />
    </Wrapper>
  </Container>
)
