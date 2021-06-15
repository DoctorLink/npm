import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Autocomplete } from '../src/Components/Autocomplete/Autocomplete';

HTMLElement.prototype.scrollIntoView = jest.fn();

type Option = { id: number; label: string };
type OptionWithKeywords = { id: number; label: string; keywords: string[] };

describe('Autocomplete component', () => {
  const getInput = () => screen.getByRole('combobox');
  const getOption = (name: string) => screen.getByRole('option', { name });

  describe('With default filter', () => {
    // Arrange
    const onSelect = jest.fn();
    let input: HTMLElement;

    const options: Option[] = [
      { id: 1, label: 'Abdominal pain' },
      { id: 2, label: 'Anal or rectal problems' },
      { id: 3, label: 'Animal or human bite' },
      { id: 4, label: 'Anxiety' },
      { id: 5, label: 'Blocked or runny nose' },
      { id: 6, label: 'Breast problems' },
      { id: 7, label: 'Breathing problems' },
      { id: 8, label: 'Burns' },
    ];

    beforeEach(() => {
      render(
        <Autocomplete
          options={options}
          getOptionLabel={(opt) => opt.label}
          onSelect={onSelect}
          placeholder="Search"
        />
      );
      input = getInput();
    });

    test('should show input with placeholder', () => {
      // Assert
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('placeholder', 'Search');
    });

    test('should not show options on render', () =>
      // Assert
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument());

    test('focusing input should show options', () => {
      // Act
      userEvent.click(input);

      // Assert
      const listbox = screen.getByRole('listbox');
      expect(listbox).toBeInTheDocument();
      const listOptions = within(listbox).getAllByRole('option');
      expect(listOptions).toHaveLength(options.length);
    });

    test('typing in input should filter options', () => {
      // Act
      userEvent.type(input, 'b');

      // Assert
      expect(screen.getAllByRole('option')).toHaveLength(4);

      // Act
      userEvent.type(input, 'rea');

      // Assert
      expect(screen.getAllByRole('option')).toHaveLength(2);
      expect(getOption('Breast problems')).toBeInTheDocument();
      expect(getOption('Breathing problems')).toBeInTheDocument();
    });

    test('should show clear button when input is populated', () => {
      // Act
      userEvent.type(input, 'b');

      // Assert
      const button = screen.getByRole('button', { name: 'Clear' });
      expect(button).toBeInTheDocument();

      // Act
      userEvent.click(button);

      // Assert
      expect(input).toHaveValue('');
      expect(button).not.toBeInTheDocument();
    });

    test('clicking on option should call onSelect', () => {
      // Arrange
      userEvent.type(input, 'abd');
      const option = getOption('Abdominal pain');

      // Act
      userEvent.click(option);

      // Assert
      expect(onSelect).toHaveBeenCalledWith(options[0]);
    });

    test('clicking away from input should hide options', () => {
      // Arrange
      userEvent.type(input, 'a');

      // Act
      userEvent.click(document.body);

      // Assert
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    test('hovering over option should set focus', () => {
      // Arrange
      userEvent.type(input, 'a');
      const option = getOption('Abdominal pain');

      // Act
      userEvent.hover(option);

      // Assert
      expect(option).toHaveClass('focused');
      const otherOptions = screen
        .getAllByRole('option')
        .filter((x) => x !== option);
      otherOptions.forEach((opt) => expect(opt).not.toHaveClass('focused'));
    });

    test('pressing down arrow should focus next option', () => {
      // Arrange
      userEvent.type(input, 'b');

      // Act
      userEvent.keyboard('[ArrowDown]');

      // Assert
      expect(getOption('Blocked or runny nose')).toHaveClass('focused');

      // Act
      userEvent.keyboard('[ArrowDown]');

      // Assert
      expect(getOption('Breast problems')).toHaveClass('focused');
      expect(getOption('Blocked or runny nose')).not.toHaveClass('focused');

      // Act
      userEvent.keyboard('[ArrowDown]');

      // Assert
      expect(getOption('Breathing problems')).toHaveClass('focused');

      // Act
      userEvent.keyboard('[ArrowDown]');
      userEvent.keyboard('[ArrowDown]');

      // Assert
      expect(getOption('Blocked or runny nose')).toHaveClass('focused');
    });

    test('pressing up arrow should focus previous option', () => {
      // Arrange
      userEvent.type(input, 'b');

      // Act
      userEvent.keyboard('[ArrowUp]');

      // Assert
      expect(getOption('Burns')).toHaveClass('focused');

      // Act
      userEvent.keyboard('[ArrowUp]');

      // Assert
      expect(getOption('Breathing problems')).toHaveClass('focused');

      // Act
      userEvent.keyboard('[ArrowUp]');

      // Assert
      expect(getOption('Breast problems')).toHaveClass('focused');

      // Act
      userEvent.keyboard('[ArrowUp]');
      userEvent.keyboard('[ArrowUp]');

      // Assert
      expect(getOption('Burns')).toHaveClass('focused');
    });

    test('selecting with arrow keys and pressing Enter should call onSelect', () => {
      // Arrange
      userEvent.type(input, 'a');
      userEvent.keyboard('[ArrowDown]');
      userEvent.keyboard('[ArrowDown]');

      // Act
      userEvent.keyboard('[Enter]');

      // Assert
      expect(onSelect).toHaveBeenCalledWith(options[1]);
    });

    test('should show a message if no options match', () => {
      // Act
      userEvent.type(input, 'xyzzy');

      // Assert
      expect(
        within(screen.getByRole('listbox')).getByText('No results found')
      ).toBeInTheDocument();
    });

    test('arrow keys should have no effect if no options match', () => {
      // Arrange
      userEvent.type(input, 'xyzzy');

      // Act
      userEvent.keyboard('[ArrowDown]');
      userEvent.keyboard('[ArrowDown]');

      // Assert
      expect(input).toBeInTheDocument();
      expect(screen.getByText('No results found')).toBeInTheDocument();
    });
  });

  describe('With custom filter', () => {
    // Arrange
    const onSelect = jest.fn();
    let input: HTMLElement;

    const options: OptionWithKeywords[] = [
      { id: 1, label: 'Abdominal pain', keywords: ['stomach', 'pain'] },
      { id: 2, label: 'Eye problems', keywords: ['eye', 'pain'] },
    ];

    beforeEach(() => {
      render(
        <Autocomplete
          options={options}
          getOptionLabel={(opt) => opt.label}
          onSelect={onSelect}
          filterOptions={(opts, value) =>
            opts.filter((opt) => opt.keywords.includes(value))
          }
          placeholder="Search"
        />
      );
      input = getInput();
    });

    test('should use filterOptions to filter', () => {
      // Act
      userEvent.type(input, 'stomach');

      // Assert
      expect(screen.getAllByRole('option')).toHaveLength(1);
      expect(getOption('Abdominal pain')).toBeInTheDocument();

      // Act
      userEvent.clear(input);
      userEvent.type(input, 'eye');

      // Assert
      expect(screen.getAllByRole('option')).toHaveLength(1);
      expect(getOption('Eye problems')).toBeInTheDocument();

      // Act
      userEvent.clear(input);
      userEvent.type(input, 'pain');

      // Assert
      expect(screen.getAllByRole('option')).toHaveLength(2);
      expect(getOption('Abdominal pain')).toBeInTheDocument();
      expect(getOption('Eye problems')).toBeInTheDocument();
    });
  });
});
