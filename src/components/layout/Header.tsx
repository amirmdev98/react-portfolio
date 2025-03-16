import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigation } from '../../hooks/useNavigation';
import { navItems } from '../../configs/personalInfo';

interface NavItem {
  to: string;
  label: string;
}

const Header = () => {
  const { activeSection, scrollToSection } = useNavigation();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Brand onClick={() => scrollToSection('home')}>
          <BrandName>Portfolio</BrandName>
        </Brand>

        <Navigation>
          {navItems.map((item: NavItem) => (
            <NavItem
              key={item.to}
              onClick={() => scrollToSection(item.to)}
              active={activeSection === item.to}
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </NavItem>
          ))}
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
  active: boolean;
}

const NavItem = styled.button<NavItemProps>`
  background: none;
  border: none;
  padding: 0.5rem;
  color: ${({ theme, active }) =>
    active ? theme.accent.primary : theme.text.primary};
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent.primary};
  }
`;

export default Header;
