import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ChatTextField from '../ChatTextField';
import ChatTextWrapper from '../ChatTextWrapper';

const Wrapper = styled.div`
  position: relative;
  width: '100%';
`;

const OptionsList = styled.ul`
  position: absolute;
  top: 55px;
  left: 0;
  width: 438px;
  max-height: 300px;
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 0;
  padding: 0;
  z-index: 100;
  overflow-y: auto;
  background-color: #fff;
`;

const Option = styled.li`
  margin: 0;
  padding: 10px 20px;
  line-height: 24px;
  cursor: pointer;

  &.focused {
    background-color: #f1f1ff;
  }
`;

export interface AutocompleteProps<TOption> {
  options: TOption[];
  onSelect: (selectedOption: TOption) => void;
  getOptionLabel: (option: TOption) => string;
  filterOptions?: (options: TOption[], inputValue: string) => TOption[];
  placeholder?: string;
  id?: string;
  disabled?: boolean;
}

export function Autocomplete<T>({
  options,
  onSelect,
  getOptionLabel,
  filterOptions,
  placeholder,
  id,
  disabled,
}: AutocompleteProps<T>): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<T[]>([]);
  const [focusedIndex, setSelectedIndex] = useState<number | null>(null);
  const [inputFocused, setInputFocused] = useState(false);
  const [mouseOverOptions, setMouseOverOptions] = useState(false);
  const optionListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (filterOptions) {
      setFilteredOptions(filterOptions(options, inputValue));
    } else {
      const inputValueLower = inputValue.toLocaleLowerCase();
      setFilteredOptions(
        options.filter((opt) =>
          getOptionLabel(opt).toLocaleLowerCase().startsWith(inputValueLower)
        )
      );
    }
  }, [options, inputValue]);

  useEffect(() => {
    if (focusedIndex !== null && focusedIndex > -1 && optionListRef.current) {
      const option = optionListRef.current.children[focusedIndex];
      const listRect = optionListRef.current.getBoundingClientRect();
      const optionRect = option.getBoundingClientRect();
      if (
        optionRect.top < listRect.top ||
        optionRect.bottom > listRect.bottom
      ) {
        option.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [focusedIndex, optionListRef.current]);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // console.log('keycode', e.keyCode, 'selectedIndex', selectedIndex);
    switch (e.keyCode) {
      case 40: // Arrow down
        setSelectedIndex((i) =>
          i === null || i === filteredOptions.length - 1 ? 0 : i + 1
        );
        break;
      case 38: // Arrow up
        setSelectedIndex((i) =>
          i === null || i <= 0 ? filteredOptions.length - 1 : i - 1
        );
        break;
      case 13: // Enter
        e.preventDefault();
        if (focusedIndex !== null && focusedIndex > -1) {
          selectOption(filteredOptions[focusedIndex]);
        }
        break;
    }
  };

  const selectOption = (option: T) => {
    setInputValue(getOptionLabel(option));
    setSelectedIndex(null);
    onSelect(option);
  };

  const showDropdown =
    !disabled &&
    filteredOptions.length > 0 &&
    (inputFocused || mouseOverOptions);

  return (
    <Wrapper>
      <ChatTextWrapper text="">
        <ChatTextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          autoComplete="off"
          id={id}
          disabled={disabled}
          onKeyDown={onKeyDown}
          role="combobox"
        />
      </ChatTextWrapper>
      {showDropdown && (
        <OptionsList
          role="listbox"
          onMouseOver={() => setMouseOverOptions(true)}
          onMouseOut={() => setMouseOverOptions(false)}
          ref={optionListRef}
        >
          {filteredOptions.map((opt, i) => {
            const label = getOptionLabel(opt);
            const focused = i === focusedIndex;
            return (
              <Option
                key={label}
                role="option"
                className={focused ? 'focused' : ''}
                onClick={() => selectOption(opt)}
                onMouseOver={() => setSelectedIndex(i)}
              >
                {label}
              </Option>
            );
          })}
        </OptionsList>
      )}
    </Wrapper>
  );
}
