import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Section } from "../../styles/SharedStyles";

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

// Project data
const projectData = [
  {
    id: 1,
    title: "Crypto Trading Bot",
    description:
      "Automated trading bot using machine learning algorithms to predict cryptocurrency market movements and execute trades.",
    image:
      "https://dummyimage.com/800x400/1a1a1a/ffffff&text=Crypto+Trading+Bot",
    techStack: ["Python", "TensorFlow", "MongoDB", "Binance API"],
    githubUrl: "https://github.com/yourusername/crypto-bot",
    liveUrl: "https://crypto-bot.demo",
  },
  {
    id: 2,
    title: "Cloud Infrastructure Manager",
    description:
      "Enterprise-level cloud infrastructure management system with automated scaling and monitoring.",
    image:
      "https://dummyimage.com/800x400/1a1a1a/ffffff&text=Cloud+Infrastructure",
    techStack: ["AWS", "Terraform", "Docker", "Node.js"],
    githubUrl: "https://github.com/yourusername/cloud-manager",
    liveUrl: "https://cloud-manager.demo",
  },
  {
    id: 3,
    title: "Secure Messaging Platform",
    description:
      "End-to-end encrypted messaging platform with real-time communication and file sharing capabilities.",
    image: "https://dummyimage.com/800x400/1a1a1a/ffffff&text=Secure+Messaging",
    techStack: ["React", "Socket.io", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/secure-chat",
    liveUrl: "https://secure-chat.demo",
  },
  {
    id: 4,
    title: "AI Image Generator",
    description:
      "Deep learning-based image generation platform with style transfer and photo manipulation capabilities.",
    image:
      "https://dummyimage.com/800x400/1a1a1a/ffffff&text=AI+Image+Generator",
    techStack: ["PyTorch", "FastAPI", "React", "Redis"],
    githubUrl: "https://github.com/yourusername/ai-image-gen",
    liveUrl: "https://ai-image.demo",
  },
];

const Projects = () => (
  <Section id="projects">
    <SectionHeader>
      <SectionTitle>Featured Projects</SectionTitle>
      <SectionSubtitle>Some of my notable works</SectionSubtitle>
    </SectionHeader>

    <ProjectGrid
      as={motion.div}
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: "some" }}
    >
      {projectData.map((project) => (
        <ProjectCard key={project.id} as={motion.div} variants={itemVariants}>
          <ProjectImageWrapper>
            <ProjectImage src={project.image} alt={project.title} />
          </ProjectImageWrapper>
          <ProjectContent>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.techStack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </TechStack>
            <Links>
              <ProjectLink
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </ProjectLink>
              <ProjectLink
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt size={20} />
              </ProjectLink>
            </Links>
            <CardGlow />
          </ProjectContent>
        </ProjectCard>
      ))}
    </ProjectGrid>
  </Section>
);

// Styled Components
const SectionHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.background.card};
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
  display: flex;
  flex-direction: column;
`;

const ProjectImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text.primary};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.9rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.background.secondary};
  color: ${({ theme }) => theme.accent.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  border: 1px solid ${({ theme }) => theme.accent.primary};
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.text.primary};
  transition: color 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.accent.primary};
  }
`;

const CardGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${({ theme }) => theme.gradient.primary};
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

export default Projects;
