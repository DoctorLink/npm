import React, { FC, useEffect, useState } from 'react';
import { Autocomplete } from '../../Components';

interface AlgoSearchModel {
  algoName: string;
  assetId: number;
  keywords: string[];
}

interface ApiAnswerProps {
  value: string | null | undefined;
  onChange: (value: string) => void;
}

const url =
  '/api/content/8e9068139c624c6a8928cebf33a4b3e6/Algos?assessmentType=1';

export const ApiAnswer: FC<ApiAnswerProps> = ({ value, onChange }) => {
  const [algos, setAlgos] = useState<AlgoSearchModel[]>([]);
  useEffect(() => {
    (async () => {
      const resp = await fetch(url);
      if (resp.ok) {
        setAlgos(await resp.json());
      }
    })();
  }, []);

  return (
    <Autocomplete
      placeholder="Search, e.g. headache sore throat"
      // disabled={!!value}
      value={algos.find((a) => a.assetId.toString() === value) ?? null}
      options={algos}
      onSelect={(algo) => onChange(algo.assetId.toString())}
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
