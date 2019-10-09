import { XmlRules } from "./XmlRules";

export function parseNumberConclusion(conclusion) {
    const xmlRules = new XmlRules(conclusion.moreDetail);
    return {
        ...conclusion,
        value: xmlRules.value || "?"
    };
}