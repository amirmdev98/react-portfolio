export interface Theme {
  name: string;
  background: {
    primary: string;
    secondary: string;
    card: string;
  };
  text: {
    primary: string;
    secondary: string;
    accent: string;
  };
  accent: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  gradient: {
    primary: string;
    glow: string;
  };
}
