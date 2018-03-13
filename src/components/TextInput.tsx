import * as React from 'react';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const TextInput: React.StatelessComponent<TextInputProps> = (props) => (
	<input type="text" {...props} />
);

export default TextInput;
