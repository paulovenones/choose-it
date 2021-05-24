import React from 'react';

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
  <div>
    <label htmlFor={inputName} className="text-base">
      <div className="flex w-full justify-between items-end">
        {labelText}
        {error && <p className="text-right text-xs text-red-500">* {error}</p>}
      </div>
      {type === 'text' ? (
        <input
          placeholder={placeholder}
          name={inputName}
          id={inputName}
          type="text"
          onChange={onChange}
          value={value}
          className="block text-base h-12 w-full rounded py-4 px-4 outline-none bg-gray-200 border-b-2 focus:border-blue-500"
        />
      ) : (
        <textarea
          placeholder={placeholder}
          name={inputName}
          id={inputName}
          onChange={onChange}
          maxLength={200}
          value={value}
          className="block text-base h-24 w-full rounded py-4 px-4 outline-none bg-gray-200 resize-none border-b-2 focus:border-blue-500"
        />
      )}
    </label>
  </div>
);

export default FormInput;
