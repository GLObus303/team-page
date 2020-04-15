import { useEffect, useState } from 'react'
import { BREAKPOINT } from '../constants'

const useDeviceType = () => {
  const [isTablet, setIsTablet] = useState<boolean | undefined>(undefined)
  const [isDesktop, setIsDesktop] = useState<boolean | undefined>(undefined)

  const handleSetWidth = () => {
    setIsTablet(
      window.innerWidth >= BREAKPOINT.MOBIlE &&
        window.innerWidth < BREAKPOINT.TABLET
    )
    setIsDesktop(window.innerWidth >= BREAKPOINT.TABLET)
  }

  useEffect(() => {
    setIsTablet(
      window.innerWidth >= BREAKPOINT.MOBIlE &&
        window.innerWidth <= BREAKPOINT.TABLET
    )
    setIsDesktop(window.innerWidth > BREAKPOINT.TABLET)

    window.addEventListener('resize', handleSetWidth)

    return () => window.removeEventListener('resize', handleSetWidth)
  }, [])

  return {
    isMobile: isTablet === false && isDesktop === false,
    isTablet,
    isDesktop,
  }
}

export default useDeviceType
