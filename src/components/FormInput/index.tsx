import React from 'react';
import { Container, InputLabel } from './style';

interface IFormInputProps {
  inputName: string;
  labelText: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  placeholder?: string;
  type?: 'textarea' | 'text';
  value: string;
  error?: string;
}

const FormInput: React.FC<IFormInputProps> = ({
  inputName,
  labelText,
  placeholder = '',
  type = 'text',
  onChange = () => {},
  value,
  error,
}) => (
  <Container>
    <InputLabel htmlFor={inputName} type={type} error={error}>
      {labelText}
      {error && <p>* {error}</p>}
      {type === 'text' ? (
        <input
          placeholder={placeholder}
          name={inputName}
          id={inputName}
          type="text"
          onChange={onChange}
          value={value}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          name={inputName}
          id={inputName}
          onChange={onChange}
          maxLength={200}
          value={value}
        />
      )}
    </InputLabel>
  </Container>
);

export default FormInput;
