import * as stylex from '@stylexjs/stylex';
import { colors } from '../tokens.stylex';

const DARK = '@media (prefers-color-scheme: dark)';

export const blueMeridianTheme = stylex.createTheme(colors, {
    primaryText: {default: 'rgb(255, 255, 255)', [DARK]: 'rgb(2, 8, 14)'},
    primaryHoverText: {default: 'rgb(255, 255, 255)', [DARK]: 'rgb(2, 8, 14)'},
    primaryBackground: {default: 'rgb(0, 104, 141)', [DARK]: 'rgb(0, 168, 225)'},
    primaryHoverBackground: {default: 'rgb(0, 79, 108)', [DARK]: 'rgb(109, 205, 255)'}
});