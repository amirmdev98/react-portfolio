import { Theme } from '../../interfaces/theme';

export const lightTheme: Theme = {
  name: 'light',
  background: {
    primary: '#ffffff',
    secondary: '#f5f5f5'
  },
  text: {
    primary: '#1a1a1a',
    secondary: '#4a4a4a'
  },
  accent: {
    primary: '#007AFF',
    secondary: '#5856D6'
  }
};

export const darkTheme: Theme = {
  name: 'dark',
  background: {
    primary: '#1a1a1a',
    secondary: '#2d2d2d'
  },
  text: {
    primary: '#ffffff',
    secondary: '#b3b3b3'
  },
  accent: {
    primary: '#0A84FF',
    secondary: '#5E5CE6'
  }
};
