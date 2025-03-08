import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Header from '../Header';
import { darkTheme, lightTheme } from '../../../styles/ThemeProvider';
import { ThemeContext } from '../../../styles/ThemeProvider';

// Mock intersection observer
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock useInView hook
jest.mock('react-intersection-observer', () => ({
  useInView: () => [null, { inView: true }]
}));

describe('Header Component', () => {
  test('renders navigation items', () => {
    const mockThemeContext = {
      theme: darkTheme,
      toggleTheme: jest.fn()
    };

    render(
      <ThemeContext.Provider value={mockThemeContext}>
        <ThemeProvider theme={darkTheme}>
          <Header />
        </ThemeProvider>
      </ThemeContext.Provider>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('theme toggle button changes theme', () => {
    const toggleTheme = jest.fn();
    const mockThemeContext = {
      theme: darkTheme,
      toggleTheme
    };

    render(
      <ThemeContext.Provider value={mockThemeContext}>
        <ThemeProvider theme={darkTheme}>
          <Header />
        </ThemeProvider>
      </ThemeContext.Provider>
    );

    const themeToggle = screen.getByLabelText('Switch to light theme');
    fireEvent.click(themeToggle);
    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });

  test('handles navigation clicks', () => {
    const mockThemeContext = {
      theme: darkTheme,
      toggleTheme: jest.fn()
    };

    render(
      <ThemeContext.Provider value={mockThemeContext}>
        <ThemeProvider theme={darkTheme}>
          <Header />
        </ThemeProvider>
      </ThemeContext.Provider>
    );

    const projectsButton = screen.getByText('Projects');
    fireEvent.click(projectsButton);
  });

  test('theme toggle switches between light and dark themes', () => {
    const toggleTheme = jest.fn();
    const mockDarkThemeContext = {
      theme: darkTheme,
      toggleTheme
    };

    const { rerender } = render(
      <ThemeContext.Provider value={mockDarkThemeContext}>
        <ThemeProvider theme={darkTheme}>
          <Header />
        </ThemeProvider>
      </ThemeContext.Provider>
    );

    // Check dark theme styling for active nav item (Home is active by default)
    const navItem = screen.getByText('Home');
    expect(navItem).toHaveStyle({
      color: darkTheme.accent.primary
    });

    // Simulate theme switch to light
    const mockLightThemeContext = {
      theme: lightTheme,
      toggleTheme
    };

    rerender(
      <ThemeContext.Provider value={mockLightThemeContext}>
        <ThemeProvider theme={lightTheme}>
          <Header />
        </ThemeProvider>
      </ThemeContext.Provider>
    );

    // Check light theme styling for active nav item
    expect(navItem).toHaveStyle({
      color: lightTheme.accent.primary
    });
  });
});
