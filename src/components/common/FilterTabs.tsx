import styled from 'styled-components';
import { motion } from 'framer-motion';

interface FilterTabsProps<T extends string> {
  categories: T[];
  activeCategory: T;
  onCategoryChange: (category: T) => void;
}

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3rem;
  overflow-x: auto;
  padding: 0.5rem;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 5%,
    black 95%,
    transparent 100%
  );
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-bottom: 1rem;
  }
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background.secondary}50;
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accent.primary}80;
    border-radius: 2px;
  }
`;

const TabsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  background: ${({ theme }) => theme.background.card};
  padding: 0.5rem;
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  @media (max-width: 768px) {
    background: transparent;
    box-shadow: none;
    border: none;
    padding: 0;
    gap: 0.75rem;
  }
`;

const Tab = styled(motion.button)<{ active: boolean }>`
  padding: 0.65rem 1.25rem;
  border: none;
  background: ${({ theme, active }) =>
    active ? theme.gradient.primary : 'transparent'};
  color: ${({ theme, active }) =>
    active ? '#fff' : theme.text.secondary};
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: ${({ active }) => (active ? '600' : '500')};
  white-space: nowrap;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    background: ${({ theme, active }) =>
      active ? theme.gradient.primary : theme.background.card};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: ${({ active }) => (active ? 0 : 1)};
  }
`;

const TabContent = styled.span`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
`;

export function FilterTabs<T extends string>({
  categories,
  activeCategory,
  onCategoryChange,
}: FilterTabsProps<T>) {
  return (
    <TabsContainer>
      <TabsWrapper>
        {categories.map((category) => (
          <Tab
            key={category}
            active={category === activeCategory}
            onClick={() => onCategoryChange(category)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <TabContent>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </TabContent>
          </Tab>
        ))}
      </TabsWrapper>
    </TabsContainer>
  );
}
