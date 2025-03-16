import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Hero from '../Hero';
import { darkTheme } from '../../../../styles/ThemeProvider';

// Mock AnimatedSection
jest.mock('../../../common/AnimatedSection', () => {
  const { motion } = jest.requireActual('framer-motion');
  const styled = jest.requireActual('styled-components').default;
  const StyledSection = styled(motion.section)`
    width: 100%;
  `;
  return {
    __esModule: true,
    AnimatedSection: ({ children, ...props }: any) => (
      <StyledSection {...props}>{children}</StyledSection>
    ),
  };
});

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>
  },
  useAnimation: () => ({
    start: jest.fn(),
    set: jest.fn(),
    stop: jest.fn()
  }),
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useSpring: () => 0,
  useTransform: () => 0,
  AnimatePresence: ({ children }: any) => <>{children}</>,
  useInView: () => [null, { inView: true }]
}));

describe('Hero Component', () => {
  test('renders content correctly', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Hero />
      </ThemeProvider>
    );

    // Check content
    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();
    expect(screen.getByText('Amir Mohammadi')).toBeInTheDocument();
    expect(screen.getByText(/Full Stack Developer/i)).toBeInTheDocument();

    // Check CTA buttons
    expect(screen.getByText(/View Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
  });

  test('CTA buttons have correct href attributes', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Hero />
      </ThemeProvider>
    );

    const contactButton = screen.getByText(/Contact Me/i);
    const projectsButton = screen.getByText(/View Projects/i);

    expect(contactButton).toHaveAttribute('href', '#contact');
    expect(projectsButton).toHaveAttribute('href', '#projects');
  });
});
