import { ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { useAnimatedInView } from '../../hooks/useInView';

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  threshold?: number;
}

const StyledSection = styled(motion.section)`
  width: 100%;
`;

export const AnimatedSection = ({
  children,
  variants,
  className,
  delay = 0,
  threshold = 0.1,
  ...props
}: AnimatedSectionProps) => {
  const { ref, controls } = useAnimatedInView(threshold);

  return (
    <StyledSection
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay,
      }}
      {...props}
    >
      {children}
    </StyledSection>
  );
};
