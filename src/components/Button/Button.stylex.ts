import * as stylex from '@stylexjs/stylex';
import { font, colors } from "../../styles/tokens.stylex";

export const styles = stylex.create({
  base: {
    zIndex: 0,
    fontFamily: font.family,
    fontWeight: font.weight,
	lineHeight: '24px',
    border: '0px',
    borderRadius: '4px',
    cursor: "pointer",
    color: {
      default: colors.primaryText,
      ':hover': colors.primaryHoverText
    },
    backgroundColor: {
        default: colors.primaryBackground,
        ':hover': colors.primaryHoverBackground
	}
  },
  small: {
	fontSize: '14px',
    padding: '4px 10px'
  },
  medium: {
	fontSize: '16px',
    padding: '8px 16px'
  },
  large: {
    fontSize: '18px',
    padding: '12px 16px'
  }
});