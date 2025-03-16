import { createContext, useContext, ReactNode, useEffect } from "react";
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

interface ThemeContextType {
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: darkTheme
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
  // Always use dark theme
  const theme = darkTheme;

  // Set theme attributes on document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", theme.background.primary);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
