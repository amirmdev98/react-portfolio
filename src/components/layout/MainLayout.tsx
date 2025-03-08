import { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from './Header';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <LayoutContainer>
      <Background>
        <GlowingOrb />
      </Background>
      <Header />
      <Main
        as={motion.main}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </Main>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: ${({ theme }) => theme.background.primary};
  transition: background 0.3s ease;
`;

const GlowingOrb = styled.div`
  position: absolute;
  top: -15vh;
  right: -15vh;
  width: 50vh;
  height: 50vh;
  border-radius: 50%;
  background: ${({ theme }) => theme.accent.primary};
  filter: blur(100px);
  opacity: 0.1;
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 2rem 2rem;
`;

export default MainLayout;
