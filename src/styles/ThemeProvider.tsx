import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme } from "../interfaces/theme";

export const darkTheme: Theme = {
  name: "dark",
  background: {
    primary: "#0A0A0F",
    secondary: "#12121A",
    card: "#1A1A23"
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#B3B3B3",
    accent: "#00FFA3"
  },
  accent: {
    primary: "#00FFA3",
    secondary: "#FF3366",
    tertiary: "#7000FF"
  },
  gradient: {
    primary: "linear-gradient(135deg, #00FFA3 0%, #7000FF 100%)",
    glow: "linear-gradient(180deg, rgba(0, 255, 163, 0.15) 0%, rgba(0, 255, 163, 0) 100%)"
  }
};

export const lightTheme: Theme = {
  name: "light",
  background: {
    primary: "#F8F9FA",
    secondary: "#FFFFFF",
    card: "#FFFFFF"
  },
  text: {
    primary: "#1A1A23",
    secondary: "#4A4A57",
    accent: "#00A676"
  },
  accent: {
    primary: "#00A676",
    secondary: "#E63956",
    tertiary: "#5D00D6"
  },
  gradient: {
    primary: "linear-gradient(135deg, #00A676 0%, #5D00D6 100%)",
    glow: "linear-gradient(180deg, rgba(0, 166, 118, 0.15) 0%, rgba(0, 166, 118, 0) 100%)"
  }
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: darkTheme,
  toggleTheme: () => null
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeWrapperProps {
  children: ReactNode;
}

export const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  // Get initial theme from localStorage or system preference
  const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark" ? darkTheme : lightTheme;
    }
    
    // Check system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? darkTheme : lightTheme;
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Update theme in localStorage and document
  useEffect(() => {
    localStorage.setItem("theme", theme.name);
    document.documentElement.setAttribute("data-theme", theme.name);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", theme.background.primary);
    }
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? darkTheme : lightTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev.name === "dark" ? lightTheme : darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
