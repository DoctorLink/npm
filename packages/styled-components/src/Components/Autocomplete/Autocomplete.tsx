import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ChatTextField from '../ChatTextField';
import ChatTextWrapper from '../ChatTextWrapper';
import { CloseIcon } from '../CloseIcon';

const Wrapper = styled.div`
  position: relative;
  width: '100%';
`;

const OptionsList = styled.ul.attrs({ role: 'listbox' })`
  position: absolute;
  top: 55px; // Height of ChatTextWrapper + 1px
  left: 0;
  width: 100%;
  max-height: 300px;
  list-style: none;
  border: 1px solid rgb(222, 222, 222);
  border-radius: 3px;
  margin: 0;
  padding: 0;
  z-index: 100;
  overflow-y: auto;
  background-color: rgb(255, 255, 255);
`;

const Option = styled.li.attrs({ role: 'option' })`
  margin: 0;
  padding: 8px 16px;
  line-height: 24px;
  font-size: 16px;
  cursor: pointer;

  &.focused {
    background-color: #f1f1fd;
  }
`;

const PlaceholderOption = styled(Option)`
  color: rgb(154, 154, 154);
  font-style: italic;
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
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [inputFocused, setInputFocused] = useState(false);
  const [mouseOverOptions, setMouseOverOptions] = useState(false);
  const optionListRef = useRef<HTMLUListElement>(null);

  // Filter options on input change
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

  // Scroll focused input into view when navigating with the arrow keys
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
    if (filteredOptions.length === 0) return;
    switch (e.keyCode) {
      case 40: // Arrow down
        setFocusedIndex((i) =>
          i === null || i === filteredOptions.length - 1 ? 0 : i + 1
        );
        break;
      case 38: // Arrow up
        setFocusedIndex((i) =>
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
    setFocusedIndex(null);
    onSelect(option);
  };

  const showDropdown = !disabled && (inputFocused || mouseOverOptions);

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
        {inputValue && (
          <CloseIcon aria-label="Clear" onClick={() => setInputValue('')} />
        )}
      </ChatTextWrapper>
      {showDropdown && (
        <OptionsList
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
                className={focused ? 'focused' : ''}
                onClick={() => selectOption(opt)}
                onMouseOver={() => setFocusedIndex(i)}
              >
                {label}
              </Option>
            );
          })}
          {filteredOptions.length === 0 && (
            <PlaceholderOption aria-disabled={true}>
              No results found
            </PlaceholderOption>
          )}
        </OptionsList>
      )}
    </Wrapper>
  );
}
