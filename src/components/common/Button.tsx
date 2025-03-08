import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const Button = styled(motion.button)<ButtonProps>`
  padding: ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return '0.5rem 1rem';
      case 'large':
        return '1rem 2rem';
      default:
        return '0.75rem 1.5rem';
    }
  }};
  
  font-size: ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return '0.875rem';
      case 'large':
        return '1.125rem';
      default:
        return '1rem';
    }
  }};
  
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  
  ${({ variant = 'primary', theme }) => {
    switch (variant) {
      case 'secondary':
        return `
          background: ${theme.background.secondary};
          color: ${theme.text.primary};
        `;
      case 'outline':
        return `
          background: transparent;
          border: 2px solid ${theme.accent.primary};
          color: ${theme.accent.primary};
        `;
      default:
        return `
          background: ${theme.accent.primary};
          color: ${theme.text.primary};
        `;
    }
  }}
  
  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Button;
