import { colors } from '../../theme'

export const button = () => `
  button {
    transition: all 250ms ease;
    border: none;
    padding: 0.1em 0.5em 0.1em 0.5em;
    margin: 0.05em;
    background: linear-gradient(
      to bottom,
      ${colors.lighter.neutral} 0%,${colors.lighter.neutral} 50%,
      ${colors.tertiary} 51%,${colors.tertiary} 100%
    );
    background-size: auto 200%;
    background-position-y: 0%;

    &:hover {
      color: white;
      background-position-y: -99%;
      cursor: pointer;
    }
  }
`
