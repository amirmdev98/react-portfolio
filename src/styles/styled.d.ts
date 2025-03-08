import 'styled-components';
import { Theme } from '../interfaces/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
