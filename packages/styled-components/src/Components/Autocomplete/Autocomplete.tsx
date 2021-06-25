import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import ChatTextField from '../ChatTextField';
import ChatTextWrapper from '../ChatTextWrapper';
import { CloseIcon } from '../CloseIcon';
import { ComboBoxList, ComboBoxOption, ComboBoxWrapper } from '../ComboBox';

export interface AutocompleteProps<TOption> {
  options: TOption[];
  value: TOption | null;
  onSelect: (selectedOption: TOption | null) => void;
  getOptionLabel: (option: TOption) => string;
  filterOptions?: (options: TOption[], inputValue: string) => TOption[];
  placeholder?: string;
  id?: string;
  disabled?: boolean;
}

export function Autocomplete<T>({
  options,
  value,
  onSelect,
  getOptionLabel,
  filterOptions,
  placeholder,
  id = 'autocomplete',
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
      if (!option) return;

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

  useEffect(() => {
    setInputValue(value ? getOptionLabel(value) : '');
  }, [value]);

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

  const showDropdown =
    !disabled &&
    // inputValue.length > 0 &&
    filteredOptions.length > 0 &&
    (inputFocused || mouseOverOptions);

  const listId = `${id}-options-list`;
  return (
    <ComboBoxWrapper aria-expanded={showDropdown}>
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
          aria-controls={listId}
          aria-activedescendant={
            focusedIndex !== null ? `${id}-option-${focusedIndex}` : ''
          }
        />
        {inputValue && (
          <CloseIcon
            aria-label="Clear"
            onClick={() => {
              setInputValue('');
              onSelect(null);
            }}
          />
        )}
      </ChatTextWrapper>
      {showDropdown && (
        <ComboBoxList
          id={listId}
          onMouseOver={() => setMouseOverOptions(true)}
          onMouseOut={() => setMouseOverOptions(false)}
          ref={optionListRef}
        >
          {filteredOptions.map((opt, i) => {
            const label = getOptionLabel(opt);
            const focused = i === focusedIndex;
            return (
              <ComboBoxOption
                key={label}
                id={`${id}-option-${i}`}
                className={focused ? 'focused' : ''}
                onClick={() => selectOption(opt)}
                onMouseOver={() => setFocusedIndex(i)}
              >
                {label}
              </ComboBoxOption>
            );
          })}
        </ComboBoxList>
      )}
    </ComboBoxWrapper>
  );
}
