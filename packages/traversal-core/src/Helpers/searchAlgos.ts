import { AlgoSearchModel } from '../Models';

const WILDCARD = '*';

export function searchAlgos(
  algos: AlgoSearchModel[],
  searchTerm: string
): AlgoSearchModel[] {
  const searchTerms = searchTerm
    .toLocaleLowerCase()
    .split(' ')
    .filter((kw) => kw.length > 2)
    .map((s) => s.replace(/[^a-z0-9]/g, ''));
  if (searchTerms.length === 0) {
    return [];
  }

  const matches = algos
    .map((algo) => ({
      algo,
      keywordCount: algo.keywords.filter((kw) =>
        searchTerms.find((term) => kw?.toLocaleLowerCase().startsWith(term))
      ).length,
      wildcard: algo.keywords.includes(WILDCARD),
    }))
    .filter((x) => x.keywordCount > 0 || x.wildcard);

  return matches
    .sort((a, b) => a.algo.algoName.localeCompare(b.algo.algoName))
    .sort((a, b) => b.keywordCount - a.keywordCount)
    .map((x) => x.algo);
}
