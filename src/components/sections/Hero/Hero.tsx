import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUpVariants, slideInLeftVariants, slideInRightVariants } from '../../../hooks/useInView';
import { AnimatedSection } from '../../common/AnimatedSection';

const HeroSection = styled(AnimatedSection)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Content = styled.div`
  z-index: 1;
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
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text.primary};
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 2rem;
`;

const CTA = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
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

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
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
          <Greeting
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            👋 Hi there, I'm
          </Greeting>
          <Title
            variants={slideInLeftVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Your Name
          </Title>
          <Subtitle
            variants={slideInLeftVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            A passionate Full-Stack Developer crafting beautiful and functional web experiences
          </Subtitle>
          <CTA>
            <PrimaryButton
              href="#contact"
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              Get in Touch
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
        </Content>
        <ImageContainer
          variants={slideInRightVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <HeroImage
            src="/hero-image.jpg"
            alt="Hero"
            loading="eager"
          />
        </ImageContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero;
