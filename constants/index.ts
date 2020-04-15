export const COLORS = {
  BLACK: '#232323',
  GREY: '#D0D0D0',
  WHITE: '#fff',
}

export const SHADOW = {
  MAIN: 'box-shadow: 0 5px 25px 0 rgba(0,0,0,0.15)',
}

export const FONT_SIZE = {
  SMALL: '1.4rem',
  BASE: '1.5rem',
  MEDIUM: '1.8rem',
  LARGE: '2.4rem',
}

export const FONT_WEIGHT = {
  BASE: '400',
  MEDIUM: '600',
  BOLD: '900',
}

export const BREAKPOINT = {
  MOBIlE: 480,
  TABLET: 768,
  DESKTOP: 1280,
}

export const SCREEN = {
  ABOVE_MOBILE: `@media (min-width: ${BREAKPOINT.MOBIlE}px)`,
  ABOVE_TABLET: `@media (min-width: ${BREAKPOINT.TABLET}px) `,
  ABOVE_DESKTOP: `@media (min-width: ${BREAKPOINT.DESKTOP}px) `,
}

export const LANGUAGES = [
  {
    label: 'CZ',
    code: 'cs',
  },
  {
    label: 'EN',
    code: 'en',
  },
]