import React from 'react'
import styled from 'styled-components'
import { Icon } from 'components/Icon'
import { COLORS, TRANSITION } from 'constants/theme'
import { mobile } from 'utils/CssUtils'

const Content = styled.div`
  white-space: nowrap;
  height: 100%;
  background: ${COLORS.BLACK};
  position: relative;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  padding: 10px 20px 10px 50px;
  font-size: 1.8rem;
  line-height: 2.6rem;
  border-radius: 50px;
  color: ${COLORS.WHITE};
  transition: transform 0.3s ${TRANSITION.CUBIC};
`

const Container = styled.a`
  height: 60px;
  padding-top: 15px;
  position: relative;

  :hover ${Content} {
    transform: translateX(0);
    transition: transform 0.3s 0.3s ${TRANSITION.CUBIC};
  }
`

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 8%;
  height: 44px;
  margin-top: 5px;
  overflow: hidden;
  border-radius: 50px;

  ${mobile`
    display: none;
  `}
`

const Button = styled.div`
  width: 42px;
  height: 24px;
  background-color: ${COLORS.BLACK};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  z-index: 1;
  cursor: pointer;
  transition: all 0.3s 0.3s ease;

  :before,
  :after {
    content: '';
    position: absolute;
    background: inherit;
    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    transition: all 0.3s 0.3s ease;
  }

  :before {
    transform: rotate(60deg);
  }

  :after {
    transform: rotate(-60deg);
  }

  :hover {
    transition: all 0.3s ease;
    border-radius: 24% / 95%;
    transform: rotate(360deg);

    :before {
      border-radius: 24% / 95%;
      transition: all 0.3s ease;
    }

    :after {
      border-radius: 24% / 95%;
      transition: all 0.3s ease;
    }
  }
`

interface HoverButtonProps {
  link?: string
  icon: string
  content?: string
  className?: string
  onClick?: () => void
}

export const HoverButton: React.FC<HoverButtonProps> = ({
  icon,
  link,
  className,
  onClick,
  content,
}) => (
  <Container href={link} className={className}>
    <Button onClick={onClick}>
      <Icon type={icon} />
    </Button>
    {content && (
      <ContentWrapper>
        <Content>{content}</Content>
      </ContentWrapper>
    )}
  </Container>
)
