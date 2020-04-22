import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Icon } from 'components/Icon'
import { COLORS } from 'constants/theme'

const Container = styled.a`
  height: 60px;
  padding-top: 15px;
  overflow: hidden;
`

const Button = styled(motion.div)`
  width: 42px;
  height: 24px;
  background-color: ${COLORS.BLACK};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  z-index: 1;

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
    transition: all 0.5s ease;
  }

  :before {
    transform: rotate(60deg);
  }

  :after {
    transform: rotate(-60deg);
  }

  :hover {
    border-radius: 24% / 95%;
    transform: rotate(360deg);

    :before {
      border-radius: 24% / 95%;
    }

    :after {
      border-radius: 24% / 95%;
    }
  }
`
interface HoverButtonProps {
  link?: string
  icon: string
  content?: string
  className?: string
}

export const HoverButton: React.FC<HoverButtonProps> = ({
  icon,
  link,
  className,
}) => (
  <Container href={link} className={className}>
    <Button>
      <Icon type={icon} />
    </Button>
  </Container>
)
