import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Section } from "../../styles/SharedStyles";
import { contactInfo, personalDetails } from "../../configs/personalInfo";

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
    {/* Advanced background elements */}
    <BackgroundPattern />
    <BackgroundOverlay />
    
    {/* Floating Elements */}
    <FloatingElement 
      as={motion.div}
      size="80px"
      top="15%"
      left="10%"
      color="primary"
      animate={{ 
        y: [0, -15, 0],
        rotate: [0, 5, 0],
        opacity: [0.4, 0.6, 0.4],
      }}
      transition={{ 
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    />
    
    <FloatingElement 
      as={motion.div}
      size="120px"
      top="70%"
      right="15%"
      color="secondary"
      animate={{ 
        y: [0, 20, 0],
        rotate: [0, -8, 0],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{ 
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    />
    
    <FloatingElement 
      as={motion.div}
      size="60px"
      bottom="15%"
      left="20%"
      color="primary"
      animate={{ 
        y: [0, 10, 0],
        x: [0, 5, 0],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{ 
        duration: 7,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    />
    
    <BackgroundCircle 
      as={motion.div}
      animate={{ 
        scale: [1, 1.05, 1],
        opacity: [0.3, 0.4, 0.3],
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity,
        repeatType: "reverse" 
      }}
    />
    
    <BackgroundCircleSmall
      as={motion.div}
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.3, 0.2],
        x: [0, 10, 0],
        y: [0, -10, 0]
      }}
      transition={{ 
        duration: 10, 
        repeat: Infinity,
        repeatType: "reverse" 
      }}
    />
    
    {/* Floating code symbols */}
    <CodeSymbol 
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        y: [-20, 0, -20],
        rotate: [0, 5, 0]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay: 1,
        repeatType: "loop"
      }}
      top="20%"
      right="25%"
    >
      &lt;/&gt;
    </CodeSymbol>
    
    <CodeSymbol 
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        y: [0, -15, 0],
        rotate: [-5, 0, -5]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: 2,
        repeatType: "loop"
      }}
      bottom="30%"
      right="10%"
    >
      { }
    </CodeSymbol>
    
    <CodeSymbol 
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        y: [0, 10, 0],
        rotate: [0, -3, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay: 3,
        repeatType: "loop"
      }}
      top="35%"
      left="10%"
    >
      ( )
    </CodeSymbol>
    
    <ContentWrapper
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Introduction as={motion.div} variants={itemVariants}>
        <ImageContainer>
          <HeroImage 
            src={personalDetails.profileImage}
            alt={personalDetails.fullName}
            as={motion.img}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(129, 47, 255, 0.6)' }}
          />
        </ImageContainer>
        <Greeting>Hello, I'm</Greeting>
        <Name>{personalDetails.fullName}</Name>
        <Title>{personalDetails.title}</Title>
        <Description>
          {personalDetails.bio}
        </Description>
      </Introduction>

      <CallToAction as={motion.div} variants={itemVariants}>
        <SocialLinks>
          <SocialLink
            href={contactInfo.github.url}
            target="_blank"
            rel="noopener noreferrer"
            as={motion.a}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={24} />
          </SocialLink>
          <SocialLink
            href={contactInfo.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            as={motion.a}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={24} />
          </SocialLink>
          <SocialLink
            href={`mailto:${contactInfo.email}`}
            rel="noopener noreferrer"
            as={motion.a}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope size={24} />
          </SocialLink>
        </SocialLinks>
        <CTAButton 
          href="#contact"
          as={motion.a}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </CTAButton>
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

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 25% 25%, ${({ theme }) => theme.accent.primary}20 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, ${({ theme }) => theme.accent.secondary}25 0%, transparent 50%),
    radial-gradient(circle at 0% 100%, ${({ theme }) => theme.accent.primary}15 0%, transparent 40%),
    radial-gradient(circle at 100% 0%, ${({ theme }) => theme.accent.secondary}15 0%, transparent 40%),
    linear-gradient(45deg, ${({ theme }) => theme.background.card}80 0%, ${({ theme }) => theme.background.primary} 100%);
  z-index: 0;
  opacity: 0.9;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.background.primary}40;
  backdrop-filter: blur(5px);
  z-index: 0;
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

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const HeroImage = styled.img`
  width: clamp(180px, 25vw, 280px);
  height: clamp(180px, 25vw, 280px);
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.accent.primary};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.7s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const BackgroundCircle = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.accent.primary}10,
    ${({ theme }) => theme.accent.secondary}20
  );
  bottom: -250px;
  right: -100px;
  z-index: 0;
  filter: blur(50px);
`;

const BackgroundCircleSmall = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.accent.secondary}10,
    ${({ theme }) => theme.accent.primary}15
  );
  top: -50px;
  left: -150px;
  z-index: 0;
  filter: blur(40px);
`;

interface FloatingElementProps {
  size: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  color: 'primary' | 'secondary';
}

const FloatingElement = styled(motion.div)<FloatingElementProps>`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  background: ${({ theme, color }) => 
    color === 'primary' 
      ? theme.accent.primary 
      : theme.accent.secondary}30;
  filter: blur(20px);
  z-index: 0;
  ${props => props.top && `top: ${props.top};`}
  ${props => props.right && `right: ${props.right};`}
  ${props => props.bottom && `bottom: ${props.bottom};`}
  ${props => props.left && `left: ${props.left};`}
`;

interface CodeSymbolProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

const CodeSymbol = styled(motion.div)<CodeSymbolProps>`
  position: absolute;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.accent.primary}40;
  z-index: 0;
  font-family: 'Consolas', 'Monaco', monospace;
  ${props => props.top && `top: ${props.top};`}
  ${props => props.right && `right: ${props.right};`}
  ${props => props.bottom && `bottom: ${props.bottom};`}
  ${props => props.left && `left: ${props.left};`}
`;

export default Hero;
