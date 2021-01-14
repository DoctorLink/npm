import { Conclusion, NumberConclusion } from '@doctorlink/traversal-core';
import { XmlRules } from './XmlRules';

export function parseNumberConclusion(
  conclusion: Conclusion
): NumberConclusion {
  const xmlRules = new XmlRules(conclusion.moreDetail);
  return {
    ...conclusion,
    value: xmlRules.value || '?',
    color: xmlRules.getRuleValue() as string,
  };
}
