import { Language } from './Language';

export interface Product {
  id: number;
  name: string;
  startAlgoId: number;
  languages: Array<Language>;
  defaultLanguageId: number;
}
