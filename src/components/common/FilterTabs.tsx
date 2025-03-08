import styled from 'styled-components';
import { motion } from 'framer-motion';

interface FilterTabsProps<T extends string> {
  categories: T[];
  activeCategory: T;
  onCategoryChange: (category: T) => void;
}

const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background.secondary};
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accent.primary};
    border-radius: 2px;
  }
`;

const Tab = styled(motion.button)<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  background: ${({ theme, active }) =>
    active ? theme.accent.primary : theme.background.card};
  color: ${({ theme, active }) =>
    active ? theme.background.primary : theme.text.primary};
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme, active }) =>
      active ? theme.accent.primary : theme.background.secondary};
  }
`;

export function FilterTabs<T extends string>({
  categories,
  activeCategory,
  onCategoryChange,
}: FilterTabsProps<T>) {
  return (
    <TabsContainer>
      {categories.map((category) => (
        <Tab
          key={category}
          active={category === activeCategory}
          onClick={() => onCategoryChange(category)}
          whileTap={{ scale: 0.95 }}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Tab>
      ))}
    </TabsContainer>
  );
}
