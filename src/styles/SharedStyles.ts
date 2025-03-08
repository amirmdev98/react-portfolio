import styled from 'styled-components';
import { motion } from 'framer-motion';

// Shared Section Component
export const Section = styled.section`
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionSubtitle = styled(motion.h3)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 3rem;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const Grid = styled(motion.div)<{ columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ columns = 3 }) => columns}, 1fr);
  gap: 2rem;
  width: 100%;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 1.5rem;
  
  a {
    color: ${({ theme }) => theme.text.primary};
    font-size: 1.5rem;
    transition: all 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.accent.primary};
      transform: translateY(-2px);
    }
  }
`;

export const Tag = styled(motion.span)`
  background: ${({ theme }) => theme.accent.primary}20;
  color: ${({ theme }) => theme.accent.primary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
