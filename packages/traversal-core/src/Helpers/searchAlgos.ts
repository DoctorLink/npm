import { AlgoSearchModel } from '../Models';

export function searchAlgos(
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
