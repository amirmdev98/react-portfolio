import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RiTerminalBoxLine } from 'react-icons/ri';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../styles/ThemeProvider';
import { useNavigation, Section } from '../../hooks/useNavigation';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { activeSection, scrollToSection } = useNavigation();
  const isDark = theme.name === 'dark';

  const navigationItems: { id: Section; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <HeaderContainer>
      <HeaderContent>
        <Brand>
          <RiTerminalBoxLine size={24} />
          <BrandName>AMD</BrandName>
        </Brand>

        <Navigation>
          {navigationItems.map((item) => (
            <NavItem
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              $isActive={activeSection === item.id}
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </NavItem>
          ))}
          <ThemeToggle
            onClick={toggleTheme}
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </ThemeToggle>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  height: 80px;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text.primary};
`;

const BrandName = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

interface NavItemProps {
  $isActive: boolean;
}

const NavItem = styled.button<NavItemProps>`
  background: none;
  border: none;
  padding: 0.5rem;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.accent.primary : theme.text.primary};
  font-size: 1rem;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.accent.primary};
    transform: scaleX(${({ $isActive }) => ($isActive ? 1 : 0)});
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  color: ${({ theme }) => theme.text.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
