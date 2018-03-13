import * as React from 'react';

export interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const NumberInput: React.StatelessComponent<NumberInputProps> = (props) => (
	<input type="number" {...props} />
);

export default NumberInput;
