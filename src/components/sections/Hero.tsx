import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Section } from "../../styles/SharedStyles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Hero = () => (
  <HeroSection id="home">
    <ContentWrapper
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Introduction as={motion.div} variants={itemVariants}>
        <Greeting>Hello, I'm</Greeting>
        <Name>Amir Mohamad Davoodi</Name>
        <Title>Full Stack Developer</Title>
        <Description>
          Passionate about building exceptional digital experiences with modern
          technologies. Specialized in React, Node.js, and cloud solutions.
        </Description>
      </Introduction>

      <CallToAction as={motion.div} variants={itemVariants}>
        <SocialLinks>
          <SocialLink
            href="https://github.com/amirdavoodi98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/amirmohamad-davoodi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </SocialLink>
          <SocialLink
            href="mailto:amirm.dev8@gmail.com"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={24} />
          </SocialLink>
        </SocialLinks>
        <CTAButton href="#contact">Get In Touch</CTAButton>
      </CallToAction>
    </ContentWrapper>
  </HeroSection>
);

const HeroSection = styled(Section)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 60px;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1;
`;

const Introduction = styled.div`
  text-align: center;
`;

const Greeting = styled.h3`
  color: ${({ theme }) => theme.accent.primary};
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Name = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: ${({ theme }) => theme.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text.secondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text.secondary};
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accent.primary};
    transform: translateY(-2px);
  }
`;

const CTAButton = styled.a`
  background: ${({ theme }) => theme.gradient.primary};
  color: ${({ theme }) => theme.text.primary};
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export default Hero;
