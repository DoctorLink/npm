import React from 'react';

function mapOption(option: any) {
  if (typeof option === 'object') {
    if (option.value === undefined) {
      throw new Error('Option objects must contain a value property.');
    }
    return option;
  }

  return { text: option, value: option };
}

export const Dropdown: React.FC<{
  options: any;
  value: any;
  onChange: any;
  className?: any;
}> = ({ options, value, onChange, className }) => {
  const optionObjects = options.map(mapOption);
  return (
    <select value={value} onChange={onChange} className={className}>
      {optionObjects.map((opt: any) => (
        <option key={opt.value} value={opt.value}>
          {opt.text || opt.value}
        </option>
      ))}
    </select>
  );
};
