import React, { FC, useEffect } from 'react';
import { TraversalAnswer, AlgoSearchModel } from '@doctorlink/traversal-core';
import { Autocomplete } from '../../Components';
import { UpdateValueCallback } from '../../ComponentModules';

interface AlgoSearchAnswerProps {
  answer: TraversalAnswer;
  answerId: string;
  questionAnswerIds: string[];
  loadAlgos: (answerId: string) => void;
  updateValue: UpdateValueCallback;
}

export const AlgoSearchAnswer: FC<AlgoSearchAnswerProps> = ({
  answer,
  answerId,
  questionAnswerIds,
  loadAlgos,
  updateValue,
}) => {
  useEffect(() => {
    loadAlgos(answerId);
  }, [answerId]);

  // Get the sibling answerId to this one.
  // Algo search questions have a string answer (for the algo name) and a value answer (for the algo ID).
  // This answer is the value answer, so we assume the first answer with a different ID is the string answer.
  const stringAnswerId = questionAnswerIds.find((id) => id !== answerId);

  const onSelect = (algo: AlgoSearchModel | null): void => {
    updateValue(answerId, questionAnswerIds, algo?.assetId.toString() ?? '');
    if (stringAnswerId) {
      updateValue(stringAnswerId, questionAnswerIds, algo?.algoName ?? '');
    }
  };

  const algos = answer.data?.algos || [];
  const selectedAlgo =
    algos.find((a) => a.assetId.toString() === answer.controlValue) ?? null;

  return (
    <Autocomplete
      placeholder={answer.displayText}
      disabled={!!answer.controlValue}
      value={selectedAlgo}
      options={algos}
      onSelect={onSelect}
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
