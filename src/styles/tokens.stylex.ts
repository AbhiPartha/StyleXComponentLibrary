import * as stylex from '@stylexjs/stylex';

const DARK = '@media (prefers-color-scheme: dark)';

export const font = stylex.defineVars({
  family: 'Amazon Ember, Amazon Ember Arabic, Arial, sans-serif',
  weight: '400'
})

export const colors = stylex.defineVars({

  // The primary colors
  primaryText: {default: 'black', [DARK]: 'white'},
  primaryHoverText: {default: 'black', [DARK]: 'white'},
  primaryBackground: {default: 'white', [DARK]: 'black'},
  primaryHoverBackground: {default: 'white', [DARK]: 'black'}
});

export const spacing = stylex.defineVars({
  none: '0px',
  xsmall: '4px',
  small: '8px',
  medium: '12px',
  large: '20px',
  xlarge: '32px',
  xxlarge: '48px',
  xxxlarge: '96px',
});