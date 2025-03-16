import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";
import { Section } from "../../styles/SharedStyles";
import { contactInfo } from "../../configs/personalInfo";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Use contact information from personalInfo config
const contactOptions = [
  {
    id: 1,
    icon: <FaEnvelope size={24} />,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    color: "#e74c3c",
  },
  {
    id: 2,
    icon: <FaLinkedin size={24} />,
    label: "LinkedIn",
    value: `linkedin.com/in/${contactInfo.linkedin.username}`,
    href: contactInfo.linkedin.url,
    color: "#0077b5",
  },
  {
    id: 3,
    icon: <FaGithub size={24} />,
    label: "GitHub",
    value: `github.com/${contactInfo.github.username}`,
    href: contactInfo.github.url,
    color: "#6e5494",
  },
  {
    id: 4,
    icon: <FaMapMarkerAlt size={24} />,
    label: "Location",
    value: contactInfo.location,
    href: "#",
    color: "#4CAF50",
  },
];

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formState);
      setSubmitStatus("success");
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <SectionHeader>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>
          Feel free to reach out for collaborations or just a friendly chat
        </SectionSubtitle>
      </SectionHeader>

      <ContactContainer>
        <ContactInfoWrapper
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          <InfoHeader>Contact Information</InfoHeader>
          <InfoText>
            I'm currently open to new opportunities and collaborations. Don't hesitate to reach out!
          </InfoText>
          
          <ContactOptionsList>
            {contactOptions.map((option) => (
              <ContactOption 
                key={option.id} 
                as={motion.a}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
              >
                <IconWrapper $color={option.color}>
                  {option.icon}
                </IconWrapper>
                <ContactDetails>
                  <ContactLabel>{option.label}</ContactLabel>
                  <ContactValue>{option.value}</ContactValue>
                </ContactDetails>
              </ContactOption>
            ))}
          </ContactOptionsList>
          
          <BackgroundCircle />
          <BackgroundCircleSmall />
        </ContactInfoWrapper>

        <ContactFormWrapper
          as={motion.div}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FormHeader>Send Me a Message</FormHeader>
          
          <ContactForm onSubmit={handleSubmit}>
            <FormField>
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </FormField>
            
            <FormField>
              <FormLabel htmlFor="email">Your Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </FormField>
            
            <FormField>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                required
                value={formState.message}
                onChange={handleChange}
                placeholder="Hi, I'd like to talk about..."
                rows={5}
              />
            </FormField>
            
            <SubmitButton 
              type="submit" 
              disabled={isSubmitting}
              as={motion.button}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <LoadingSpinner />
              ) : (
                <>
                  <FaPaperPlane size={16} />
                  <span>Send Message</span>
                </>
              )}
            </SubmitButton>
            
            {submitStatus === "success" && (
              <SubmitMessage $success>
                Message sent successfully! I'll get back to you soon.
              </SubmitMessage>
            )}
            
            {submitStatus === "error" && (
              <SubmitMessage $success={false}>
                There was an error sending your message. Please try again later.
              </SubmitMessage>
            )}
          </ContactForm>
        </ContactFormWrapper>
      </ContactContainer>
    </Section>
  );
};

// Styled Components
const SectionHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
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

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfoWrapper = styled.div`
  background: ${({ theme }) => theme.gradient.primary};
  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  color: white;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  @media (max-width: 992px) {
    padding: 2.5rem 1.5rem;
  }
`;

const InfoHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const InfoText = styled.p`
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const ContactOptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 2;
`;

const ContactOption = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: white;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`;

const IconWrapper = styled.div<{ $color: string }>`
  background: rgba(255, 255, 255, 0.15);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.$color};
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }
  
  ${ContactOption}:hover &::before {
    opacity: 0.7;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;

const ContactValue = styled.span`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const BackgroundCircle = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  bottom: -100px;
  right: -100px;
  z-index: 0;
`;

const BackgroundCircleSmall = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  top: -50px;
  left: -50px;
  z-index: 0;
`;

const ContactFormWrapper = styled.div`
  background: ${({ theme }) => theme.background.card};
  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  @media (max-width: 992px) {
    padding: 2.5rem 1.5rem;
  }
`;

const FormHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text.primary};
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text.secondary};
  font-weight: 500;
`;

const FormInput = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.background.secondary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.text.primary};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.accent.primary}40;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.text.secondary}80;
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.background.secondary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.text.primary};
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.accent.primary}40;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.text.secondary}80;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.gradient.primary};
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
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
  
  &:not(:disabled):hover::before {
    left: 100%;
  }
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const SubmitMessage = styled.div<{ $success?: boolean }>`
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  margin-top: 1rem;
  background: ${({ $success }) => 
    $success ? '#10ac8480' : '#e74c3c80'};
  color: ${({ $success }) => 
    $success ? '#d4f8e8' : '#ffedeb'};
  border: 1px solid ${({ $success }) => 
    $success ? '#10ac84' : '#e74c3c'};
`;

export default Contact;
