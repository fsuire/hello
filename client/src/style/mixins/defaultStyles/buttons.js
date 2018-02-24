import { colors } from '../../theme'

export const button = () => `
  button {
    transition: all 200ms ease;
    border: 1px solid ${colors.dark.neutral};
    padding: 0.1em 0.5em 0.1em 0.5em;
    margin: 0.05em;
    background: linear-gradient(
      to bottom,
      ${colors.lighter.neutral} 0%,${colors.lighter.neutral} 50%,
      ${colors.tertiary} 51%,${colors.tertiary} 100%
    );
    background-size: auto 200%;
    background-position-y: 0%;

    &.tiny-button {
      font-size: 0.75em;
      padding: 0.1em 0.25em 0.1em 0.25em;
    }

    &:not([disabled]):hover {
      color: white;
      background-position-y: 101%;
      cursor: pointer;
    }

    &:disabled {
      opacity: 1 !important;
      background: ${colors.light.neutral};
      color: ${colors.neutral};
      border-color: ${colors.neutral};

      &:hover {
        cursor: not-allowed;
      }
    }
  }
`
