import { motion } from "framer-motion";
import styled from "styled-components";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { Section as BaseSection } from "../../styles/SharedStyles";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Contact options
const contactOptions = [
  {
    id: 1,
    icon: <FaEnvelope size={24} />,
    label: "Email",
    value: "amirm.dev8@gmail.com",
    href: "mailto:amirm.dev8@gmail.com",
  },
  {
    id: 2,
    icon: <FaLinkedin size={24} />,
    label: "LinkedIn",
    value: "linkedin.com/in/amirmohamad-davoodi",
    href: "https://www.linkedin.com/in/amirmohamad-davoodi",
  },
  {
    id: 3,
    icon: <FaGithub size={24} />,
    label: "GitHub",
    value: "github.com/amirdavoodi98",
    href: "https://github.com/amirdavoodi98",
  },
];

const Contact = () => (
  <Section id="contact">
    <SectionHeader>
      <SectionTitle>Contact Me</SectionTitle>
      <SectionSubtitle>Let's get in touch!</SectionSubtitle>
    </SectionHeader>

    <ContactGrid
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: "some" }}
    >
      {contactOptions.map((option) => (
        <ContactCard key={option.id} as={motion.div} variants={itemVariants}>
          <IconContainer>{option.icon}</IconContainer>
          <ContactLabel>{option.label}</ContactLabel>
          <ContactValue>{option.value}</ContactValue>
          <ContactLink
            href={option.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect
          </ContactLink>
        </ContactCard>
      ))}
    </ContactGrid>
  </Section>
);

// Styled Components
const Section = styled(BaseSection)`
  padding: 4rem 2rem; // Reduced from 6rem
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem; // Reduced from 3rem
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionSubtitle = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem; // Reduced from 2rem
  width: 100%;
`;

const ContactCard = styled.div`
  background: ${({ theme }) => theme.background.card};
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const IconContainer = styled.div`
  background: ${({ theme }) => theme.background.secondary};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: ${({ theme }) => theme.accent.primary};
`;

const ContactLabel = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 0.5rem;
`;

const ContactValue = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.accent.primary};
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

export default Contact;
