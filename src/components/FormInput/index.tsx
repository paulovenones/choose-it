import React from 'react';
import { Container, InputLabel } from './style';

interface IFormInputProps {
  inputName: string;
  labelText: string;
  placeholder?: string;
  type?: 'textarea' | 'text';
}

const FormInput: React.FC<IFormInputProps> = ({
  inputName,
  labelText,
  placeholder = '',
  type = 'text',
}) => (
  <Container>
    <InputLabel htmlFor={inputName} type={type}>
      {labelText}
      {type === 'text' ? (
        <input
          placeholder={placeholder}
          name={inputName}
          id={inputName}
          type="text"
        />
      ) : (
        <textarea
          placeholder={placeholder}
          name={inputName}
          id={inputName}
          maxLength={10}
        />
      )}
    </InputLabel>
  </Container>
);

export default FormInput;
