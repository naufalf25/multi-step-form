import React from 'react';

function InputText({
  placeholder,
  value,
  onChangeText,
  required,
  type,
  error,
}: {
  placeholder: string;
  value: string;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  type: string;
  error: boolean;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChangeText}
      required={required}
      className={`placeholder:text-grey-500 w-full rounded-sm border px-4 py-2 font-semibold placeholder:font-semibold placeholder:tracking-wide ${error && value.length === 0 ? 'border-red-500 focus:outline-red-500' : 'border-gray-400 hover:border-purple-600 focus:outline-purple-600'}`}
    />
  );
}

export default InputText;
