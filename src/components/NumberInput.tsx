import * as React from 'react';
import { Input as ThemedInput } from '@skeoh/pic';

export interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const NumberInput: React.StatelessComponent<NumberInputProps> = (props) => (
	<ThemedInput type="number" {...props} />
);

export default NumberInput;
