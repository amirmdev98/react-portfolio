import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  background: {
    primary: '#0A0A0F',
    secondary: '#12121A',
    card: '#1A1A23',
  },
  accent: {
    primary: '#00FFA3',    // Neon green
    secondary: '#FF3366',   // Pink
    tertiary: '#7000FF',   // Purple
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B3B3B3',
    accent: '#00FFA3',
  },
  gradient: {
    primary: 'linear-gradient(135deg, #00FFA3 0%, #7000FF 100%)',
    glow: 'linear-gradient(180deg, rgba(0, 255, 163, 0.15) 0%, rgba(0, 255, 163, 0) 100%)',
  },
  name: 'dark'
};

export const lightTheme: DefaultTheme = {
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F5F7',
    card: '#FFFFFF',
  },
  accent: {
    primary: '#007AFF',    // Blue
    secondary: '#FF3366',   // Pink
    tertiary: '#5856D6',   // Purple
  },
  text: {
    primary: '#000000',
    secondary: '#666666',
    accent: '#007AFF',
  },
  gradient: {
    primary: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
    glow: 'linear-gradient(180deg, rgba(0, 122, 255, 0.15) 0%, rgba(0, 122, 255, 0) 100%)',
  },
  name: 'light'
};
