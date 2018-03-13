import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.StatelessComponent<ButtonProps> = (props) => (
	<button type="button" {...props} />
);

export default Button;
