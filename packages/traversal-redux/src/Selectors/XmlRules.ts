interface Rule {
  high: number | null;
  low: number | null;
  value: string;
}

export class XmlRules {
  value: string;
  rules: Rule[];
  constructor(xml: string) {
    const parser = new DOMParser();
    const element = parser.parseFromString(xml, 'text/xml').documentElement;
    this.value = element.getAttribute('value') as string;
    this.rules = Array.from(element.getElementsByTagName('rule')).map(
      (rule) => {
        const high = rule.getAttribute('high');
        const low = rule.getAttribute('low');
        return {
          high: (high && Number(high)) || null,
          low: (low && Number(low)) || null,
          value: rule.innerHTML,
        };
      }
    );
  }

  getRuleValue(comparisonValue: number = +this.value): string | null {
    if (!comparisonValue) return null;

    const matchingRule = this.rules.find((rule) => {
      const withinLowerBound = rule.low === null || rule.low <= comparisonValue;
      const withinUpperBound =
        rule.high === null || rule.high > comparisonValue;
      return withinLowerBound && withinUpperBound;
    });
    return matchingRule?.value ?? null;
  }
}
