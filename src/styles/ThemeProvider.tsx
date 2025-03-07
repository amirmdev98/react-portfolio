import { createContext, useState, useContext, ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export const darkTheme = {
  name: "dark",
  background: {
    primary: "#0A0A0F",
    secondary: "#12121A",
    card: "#1A1A23",
  },
  accent: {
    primary: "#00FFA3",
    secondary: "#FF3366",
    tertiary: "#7000FF",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#B3B3B3",
    accent: "#00FFA3",
  },
  gradient: {
    primary: "linear-gradient(135deg, #00FFA3 0%, #7000FF 100%)",
    glow: "linear-gradient(180deg, rgba(0, 255, 163, 0.15) 0%, rgba(0, 255, 163, 0) 100%)",
  },
};

export const lightTheme = {
  name: "light",
  background: {
    primary: "#F8F9FA",
    secondary: "#FFFFFF",
    card: "#FFFFFF",
  },
  accent: {
    primary: "#00A676",
    secondary: "#E63956",
    tertiary: "#5D00D6",
  },
  text: {
    primary: "#1A1A23",
    secondary: "#4A4A57",
    accent: "#00A676",
  },
  gradient: {
    primary: "linear-gradient(135deg, #00A676 0%, #5D00D6 100%)",
    glow: "linear-gradient(180deg, rgba(0, 166, 118, 0.15) 0%, rgba(0, 166, 118, 0) 100%)",
  },
};

export type ThemeType = typeof darkTheme;

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: darkTheme,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeWrapper: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(darkTheme);

  const toggleTheme = () => {
    setTheme(theme.name === "dark" ? lightTheme : darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
