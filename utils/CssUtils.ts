import { BREAKPOINT } from 'constants/theme'
import { css } from 'styled-components'

const mediaQuery = (name: string) => (
  literals: TemplateStringsArray,
  ...styles: any[]
) => css`
  @media (max-width: ${BREAKPOINT[name]}px) {
    ${css(literals, ...styles)}
  }
`

export const notebook = mediaQuery('NOTEBOOK')
export const tablet = mediaQuery('TABLET')
export const mobile = mediaQuery('MOBILE')
export const smallMobile = mediaQuery('SMALL_MOBILE')

export const prop = (targetProp: string) => (props: {
  [key: string]: string
}) => props[targetProp]
