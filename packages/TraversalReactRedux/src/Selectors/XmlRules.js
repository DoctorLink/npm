const parser = new DOMParser();

export class XmlRules {
    constructor(xml) {
        const element = parser.parseFromString(xml, "text/xml").documentElement;
        this.value = element.getAttribute("value");
        this.rules = Array.from(element.getElementsByTagName("rule")).map(rule => ({
            high: rule.getAttribute("high"),
            low: rule.getAttribute("low"),
            value: rule.innerHTML
        }));
    }

    getRuleValue(comparisonValue = this.value) {
        const matchingRule = this.rules.find(rule => {
            const withinLowerBound = rule.low === null || rule.low <= comparisonValue;
            const withinUpperBound = rule.high === null || rule.high > comparisonValue;
            return withinLowerBound && withinUpperBound;
        });
        return matchingRule && matchingRule.value;
    }
}
