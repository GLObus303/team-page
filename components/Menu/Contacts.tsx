import { LANDSCAPE, FONT_SIZE } from 'constants/theme'

import React from 'react'
import styled from 'styled-components'
import { HoverButton } from 'components/HoverButton'
import { mobile } from 'utils/CssUtils'
import { PhoneIcon } from 'components/Icons/Phone'
import { MailIcon } from 'components/Icons/Mail'

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
  font-size: ${FONT_SIZE.SMALL};

  ${LANDSCAPE.MOBILE} {
    display: inline;
  }

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
      <Content>+420 603160025</Content>
      <HoverButton icon={<PhoneIcon />} content="603160025" />
    </Wrapper>
    <Wrapper>
      <Content>lukascizek3@gmail.com</Content>
      <HoverButton icon={<MailIcon />} content="lukascizek3@gmail.com" />
    </Wrapper>
  </Container>
)
