import { Theme } from '../../interfaces/theme';

export const darkTheme: Theme = {
  name: 'dark',
  background: {
    primary: '#1a1a1a',
    secondary: '#2d2d2d',
    card: '#333333'
  },
  text: {
    primary: '#ffffff',
    secondary: '#cccccc',
    accent: '#66b3ff'
  },
  accent: {
    primary: '#66b3ff',
    secondary: '#3399ff',
    tertiary: '#0080ff'
  },
  gradient: {
    primary: 'linear-gradient(135deg, #66b3ff 0%, #3399ff 100%)',
    glow: 'radial-gradient(circle, rgba(102, 179, 255, 0.15) 0%, rgba(102, 179, 255, 0) 70%)'
  }
};
