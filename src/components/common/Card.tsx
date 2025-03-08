import styled from 'styled-components';
import { motion } from 'framer-motion';

interface CardProps {
  elevation?: 'low' | 'medium' | 'high';
  padding?: 'small' | 'medium' | 'large';
}

const Card = styled(motion.div)<CardProps>`
  background: ${({ theme }) => theme.background.secondary};
  border-radius: 12px;
  overflow: hidden;
  
  padding: ${({ padding = 'medium' }) => {
    switch (padding) {
      case 'small':
        return '1rem';
      case 'large':
        return '2rem';
      default:
        return '1.5rem';
    }
  }};
  
  box-shadow: ${({ elevation = 'medium' }) => {
    switch (elevation) {
      case 'low':
        return '0 2px 4px rgba(0, 0, 0, 0.1)';
      case 'high':
        return '0 8px 16px rgba(0, 0, 0, 0.2)';
      default:
        return '0 4px 8px rgba(0, 0, 0, 0.15)';
    }
  }};
  
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export default Card;
