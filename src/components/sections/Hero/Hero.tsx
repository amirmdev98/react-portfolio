import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUpVariants, slideInLeftVariants } from '../../../hooks/useInView';
import { AnimatedSection } from '../../common/AnimatedSection';

const HeroSection = styled(AnimatedSection)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 2rem;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Greeting = styled(motion.span)`
  display: inline-block;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.accent.primary};
  margin-bottom: 1rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.2;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text.primary};
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 2rem;
  max-width: 600px;
`;

const CTA = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const PrimaryButton = styled(motion.a)`
  padding: 0.8rem 1.6rem;
  background: ${({ theme }) => theme.accent.primary};
  color: ${({ theme }) => theme.background.primary};
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.accent.primary};
  color: ${({ theme }) => theme.accent.primary};
`;

const BackgroundShape = styled(motion.div)`
  position: absolute;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.accent.primary}10;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
  right: -250px;
  top: -250px;
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <BackgroundShape
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      <Container>
        <Content>
          <MainContent>
            <Greeting
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
            >
              Hi, I'm
            </Greeting>
            <Title
              variants={slideInLeftVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Amir Mohammadi
            </Title>
            <Subtitle
              variants={slideInLeftVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              A Full Stack Developer crafting beautiful and functional web experiences
            </Subtitle>
            <CTA>
              <PrimaryButton
                href="#contact"
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                Contact Me
              </PrimaryButton>
              <SecondaryButton
                href="#projects"
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
              >
                View Projects
              </SecondaryButton>
            </CTA>
          </MainContent>
        </Content>
      </Container>
    </HeroSection>
  );
};

export default Hero;
