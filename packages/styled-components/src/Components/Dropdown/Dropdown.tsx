import React, { ChangeEvent } from 'react';

export interface OptionObject {
  text: string;
  value: string | number;
}

export type Option = string | number | OptionObject;

function mapOption(option: Option): OptionObject {
  if (typeof option === 'object') {
    if (option.value === undefined) {
      throw new Error('Option objects must contain a value property.');
    }
    return option;
  }

  return { text: `${option}`, value: option };
}

export const Dropdown: React.FC<{
  options: Option[];
  value: string | number;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}> = ({ options, value, onChange, className }) => {
  const optionObjects = options.map(mapOption);
  return (
    <select value={value} onChange={onChange} className={className}>
      {optionObjects.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.text || opt.value}
        </option>
      ))}
    </select>
  );
};
