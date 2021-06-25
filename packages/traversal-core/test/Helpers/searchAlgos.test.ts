import { AlgoSearchModel, searchAlgos } from '../../src';

describe('searchAlgos', () => {
  const algos: AlgoSearchModel[] = [
    { assetId: 1, algoName: 'Head problems', keywords: ['head', 'headache'] },
    {
      assetId: 2,
      algoName: 'Cold or cough',
      keywords: ['cold', 'cough', 'headache'],
    },
    { assetId: 3, algoName: 'Burns', keywords: ['burn', 'scald', 'pain'] },
    {
      assetId: 4,
      algoName: 'Anxiety',
      keywords: ['anxiety', 'anxious', 'headache'],
    },
    {
      assetId: 5,
      algoName: 'Dodgy algo with null keywords',
      keywords: [(null as unknown) as string],
    },
    { assetId: 6, algoName: 'Ear or hearing', keywords: ['Ear', 'hearing'] },
    { assetId: 999, algoName: 'Anything else', keywords: ['*'] },
  ];

  test.each`
    searchTerm
    ${''}
    ${'  '}
    ${'he co bu'}
  `(
    'Given whitespace or terms less than 3 characters, returns empty array',
    ({ searchTerm }) => {
      // Act
      const result = searchAlgos(algos, searchTerm);

      // Assert
      expect(result).toHaveLength(0);
    }
  );

  test('When no keywords match, returns algo with * keyword', () => {
    // Act
    const result = searchAlgos(algos, 'xyzzy');

    // Assert
    expect(result.map((a) => a.algoName)).toEqual(['Anything else']);
  });

  test('Given a single keyword, returns all algos with that keyword, sorted by algo name', () => {
    // Act
    const result = searchAlgos(algos, 'headache');

    // Assert
    expect(result.map((a) => a.algoName)).toEqual([
      'Anxiety',
      'Cold or cough',
      'Head problems',
      'Anything else',
    ]);
  });

  test('Given multiple keywords, returns all algos with those keywords, sorted by algo name', () => {
    // Act
    const result = searchAlgos(algos, 'headache burn');

    // Assert
    expect(result.map((a) => a.algoName)).toEqual([
      'Anxiety',
      'Burns',
      'Cold or cough',
      'Head problems',
      'Anything else',
    ]);
  });

  test('Given keywords with punctuation, ignores punctuation', () => {
    // Act
    const result = searchAlgos(algos, 'headache, burn.');

    // Assert
    expect(result.map((a) => a.algoName)).toEqual([
      'Anxiety',
      'Burns',
      'Cold or cough',
      'Head problems',
      'Anything else',
    ]);
  });

  test('Given multiple keywords, sorts algos with the most matches first', () => {
    // Act
    const result = searchAlgos(algos, 'headache cough');

    // Assert
    expect(result.map((a) => a.algoName)).toEqual([
      'Cold or cough',
      'Anxiety',
      'Head problems',
      'Anything else',
    ]);
  });

  test('Given part of a keyword, returns all algos with keywords starting with that string', () => {
    // Act
    const result = searchAlgos(algos, 'head');

    // Assert
    expect(result.map((a) => a.algoName)).toEqual([
      'Head problems',
      'Anxiety',
      'Cold or cough',
      'Anything else',
    ]);
  });

  test.each`
    searchTerm
    ${'EAR'}
    ${'ear'}
    ${'Hearing'}
    ${'hearing'}
  `(
    'Given keyword in mixed case, returns all algos with that keyword',
    ({ searchTerm }) => {
      // Act
      const result = searchAlgos(algos, searchTerm);

      // Assert
      expect(result.map((a) => a.algoName)).toEqual([
        'Ear or hearing',
        'Anything else',
      ]);
    }
  );
});
