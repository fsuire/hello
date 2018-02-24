import { button } from './buttons'

import { colors } from '../../theme'

export default () => `
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  color: ${colors.darker.neutral};

  &, * {
    box-sizing: border-box;
  }

  ${button()}
`
