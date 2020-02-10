import { XmlRules } from './XmlRules';

export function parseNumberConclusion(conclusion: {
  displayText?: string;
  category1?: string;
  moreDetail: any;
}) {
  const xmlRules: any = new XmlRules(conclusion.moreDetail);
  return {
    ...conclusion,
    value: xmlRules.value || '?',
  };
}
