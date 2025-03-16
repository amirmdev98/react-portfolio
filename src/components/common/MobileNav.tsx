import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

interface MobileNavProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

const MobileNav = ({ activeSection, onNavClick }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when a section is clicked
  const handleNavClick = (section: string) => {
    onNavClick(section);
    setIsOpen(false);
  };

  // Close menu when escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <Container>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </MenuButton>
      
      <AnimatePresence>
        {isOpen && (
          <MenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MenuContent
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <MenuList>
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'blog', label: 'Blog' },
                  { id: 'contact', label: 'Contact' },
                ].map((item) => (
                  <MenuItem
                    key={item.id}
                    $isActive={activeSection === item.id}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </MenuList>
            </MenuContent>
          </MenuOverlay>
        )}
      </AnimatePresence>
    </Container>
  );
};

const Container = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.accent.primary};
  z-index: 110;
  position: relative;
`;

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  z-index: 100;
`;

const MenuContent = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  max-width: 300px;
  background: ${({ theme }) => theme.background.card};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  padding: 5rem 1.5rem 2rem;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MenuItem = styled.button<{ $isActive: boolean }>`
  background: transparent;
  border: none;
  text-align: left;
  font-size: 1.25rem;
  padding: 0.75rem 0;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.accent.primary : theme.text.primary};
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  position: relative;
  cursor: pointer;
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? "3rem" : "0")};
    height: 2px;
    background: ${({ theme }) => theme.gradient.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 3rem;
  }
`;

export default MobileNav;
