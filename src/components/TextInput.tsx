import * as React from 'react';
import { Input as ThemedInput } from '@skeoh/pic';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const TextInput: React.StatelessComponent<TextInputProps> = (props) => (
	<ThemedInput type="text" {...props} />
);

export default TextInput;
