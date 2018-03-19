import * as React from 'react';
import { Button as ThemedButton } from '@skeoh/pic';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.StatelessComponent<ButtonProps> = (props) => (
	<ThemedButton type="button" {...props} />
);

export default Button;
