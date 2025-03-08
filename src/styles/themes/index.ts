import { Theme } from '../../interfaces/theme';

export const lightTheme: Theme = {
  name: 'light',
  background: {
    primary: '#ffffff',
    secondary: '#f8f9fa',
    card: '#ffffff'
  },
  text: {
    primary: '#212529',
    secondary: '#495057',
    accent: '#0066cc'
  },
  accent: {
    primary: '#0066cc',
    secondary: '#0052a3',
    tertiary: '#004080'
  },
  gradient: {
    primary: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)',
    glow: 'radial-gradient(circle, rgba(0, 102, 204, 0.15) 0%, rgba(0, 102, 204, 0) 70%)'
  }
};

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
