import React, { FC, useEffect } from 'react';
import { AlgoSearchModel } from '@doctorlink/traversal-core';
import { Autocomplete } from '../../Components';

interface DropdownAnswerProps {
  algos: AlgoSearchModel[];
  loadAlgos: () => void;
  value: string | null | undefined;
  onValueChange: (value: string) => void;
  onTextChange: (value: string) => void;
}

export const DropdownAnswer: FC<DropdownAnswerProps> = ({
  algos,
  loadAlgos,
  value,
  onValueChange,
  onTextChange,
}) => {
  useEffect(() => {
    loadAlgos();
  }, []);

  return (
    <Autocomplete
      placeholder="Search, e.g. headache sore throat"
      disabled={!!value}
      value={algos.find((a) => a.assetId.toString() === value) ?? null}
      options={algos}
      onSelect={(algo) => {
        onValueChange(algo?.assetId.toString() ?? '');
        onTextChange(algo?.algoName ?? '');
      }}
      getOptionLabel={(opt) => opt.algoName}
      filterOptions={(options, inputValue) => searchAlgos(options, inputValue)}
    />
  );
};

function searchAlgos(
  algos: AlgoSearchModel[],
  searchTerm: string
): AlgoSearchModel[] {
  const keywords = searchTerm
    .toLocaleLowerCase()
    .split(' ')
    .filter((kw) => kw.length > 2)
    .map((s) => s.replace(/[^a-z0-9]/g, ''));
  if (keywords.length === 0) {
    return [];
  }

  const matches = algos
    .map((algo) => ({
      algo,
      keywordCount: algo.keywords.filter((akw) =>
        keywords.find((kw) => akw?.toLocaleLowerCase().startsWith(kw))
      ).length,
    }))
    .filter((x) => x.keywordCount > 0);

  return matches
    .sort((a, b) => a.algo.algoName.localeCompare(b.algo.algoName))
    .sort((a, b) => b.keywordCount - a.keywordCount)
    .map((x) => x.algo);
}
