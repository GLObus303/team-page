export const COLORS = {
  BLACK: '#232323',
  GREY: '#777272',
  WHITE: '#fff',
  LIGHT_BLUE: '#EAF3FC',
}

export const SHADOW = {
  MAIN: 'box-shadow: 0 5px 25px 0 rgba(0,0,0,0.15)',
}

export const FONT_SIZE = {
  SMALL: '1.4rem',
  BASE: '2rem',
  MEDIUM: '2.6rem',
  LARGE: '3.6rem',
  HEADING: '6rem',
}

export const LINE_HEIGHT = {
  SMALL: '1.6rem',
  BASE: '2.2rem',
  MEDIUM: '2.8rem',
  LARGE: '4rem',
  HEADING: '6rem',
}

export const FONT_WEIGHT = {
  BASE: '400',
  BOLD: '700',
}

export const BREAKPOINT: { [key: string]: number } = {
  SMALL_MOBILE: 374,
  MOBILE: 480,
  MOBILE_LANDSCAPE: 896,
  TABLET: 1024,
  LAPTOP: 1366,
}

export const LANDSCAPE = {
  MOBILE: `@media screen and (orientation: landscape) and (max-width: ${BREAKPOINT.MOBILE_LANDSCAPE}px)`,
}

export const Z_INDEX = {
  FRONT: 1,
  BASE_LEVEL: 0,
  BEHIND: -1,
}

export const MAX_CONTENT_WIDTH = '1940px'

export const TRANSITION = {
  CUBIC: 'cubic-bezier(0.77, 0.2, 0.05, 1)',
  LINEAR: 'linear',
  EASE_IN: 'ease-in',
}
