import { colors } from '../theme'

export const separator = (direction = 'bottom', color = colors.light.neutral) => `
  & {
    border-${direction}: 1px solid ${color};
  }
`