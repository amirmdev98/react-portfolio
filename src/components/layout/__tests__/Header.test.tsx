import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Header from '../Header';
import { darkTheme } from '../../../styles/ThemeProvider';
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
      theme: darkTheme
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

  test('handles navigation clicks', () => {
    const mockThemeContext = {
      theme: darkTheme
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

  test('styling for active nav items', () => {
    const mockThemeContext = {
      theme: darkTheme
    };

    render(
      <ThemeContext.Provider value={mockThemeContext}>
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
  });
});
