// https://styled-components.com/docs/api#typescript
import 'styled-components';
import { RootTheme } from '.';

declare module 'styled-components' {
  // Extend the empty DefaultTheme interface from styled-components to include our own definitions
  export interface DefaultTheme extends RootTheme {}
}
