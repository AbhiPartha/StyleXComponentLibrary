import * as stylex from '@stylexjs/stylex';
import type { ComponentChildren } from "preact";
import { h } from 'preact';
import { styles } from './Button.stylex';
import { blueMeridianTheme as DefaultMeridianTheme } from '../../styles/themes/default.stylex';

type ButtonProps = {
	size?: 'small' | 'medium' | 'large';
	onClick: (event: MouseEvent) => any;
	children: ComponentChildren;
}

const Button = ({ size = 'medium', onClick, children }: ButtonProps) => {
	return (
		<button {...stylex.attrs(
			DefaultMeridianTheme,
			styles.base,
			styles[size]
		)} onClick={onClick}> {children} </button>
	);
};

export default Button