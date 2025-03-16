import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Section } from "../../styles/SharedStyles";
import { projects } from "../../configs/personalInfo";
import { useState } from "react";
import { FilterTabs } from "../common/FilterTabs";

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

// Get unique project categories for filtering
const allCategories = ["all", ...new Set(projects.flatMap(project => project.tags.filter(tag => tag !== "all")))];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Filter projects based on selected category
  const filteredProjects = projects.filter(
    project => activeCategory === "all" || project.tags.includes(activeCategory)
  );

  return (
    <ProjectsSection id="projects">
      <SectionHeader>
        <SectionTitle>My Projects</SectionTitle>
        <SectionSubtitle>
          Check out some of my recent web development work
        </SectionSubtitle>
      </SectionHeader>

      <FilterContainer>
        <FilterTabs 
          categories={allCategories} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
      </FilterContainer>

      <ProjectsGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            as={motion.a}
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <ProjectImageWrapper>
              <ProjectImage src={project.image} alt={project.title} />
              <ImageOverlay>
                <OverlayLinks>
                  <ProjectLinkButton
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View GitHub repository"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={22} />
                    <span>Code</span>
                  </ProjectLinkButton>
                  <ProjectLinkButton
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit live project"
                  >
                    <FaExternalLinkAlt size={18} />
                    <span>Demo</span>
                  </ProjectLinkButton>
                </OverlayLinks>
              </ImageOverlay>
            </ProjectImageWrapper>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.technologies.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </TechStack>
            </ProjectContent>
            <CardGlow className="card-glow" />
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

// Styled Components
const ProjectsSection = styled(Section)`
  padding: 4rem 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.background.primary}90,
      ${({ theme }) => theme.background.card}95
    );
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(
      circle at 20% 30%,
      ${({ theme }) => theme.accent.primary}15 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 70%,
      ${({ theme }) => theme.accent.secondary}15 0%,
      transparent 50%
    );
    z-index: -1;
    opacity: 0.7;
  }
`;

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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const ProjectCard = styled(motion.a)`
  background: ${({ theme }) => theme.background.card};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover {
    box-shadow: 0 20px 30px -15px rgba(0, 0, 0, 0.2);
    
    .card-glow {
      opacity: 1;
    }
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  
  &::after {
    content: '';
    display: block;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
  }
`;

const ProjectImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const OverlayLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.accent.primary};
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s ease, background 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.accent.secondary || theme.accent.primary};
  }
`;

const ProjectContent = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text.primary};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1rem;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.background.secondary};
  color: ${({ theme }) => theme.accent.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  border: 1px solid ${({ theme }) => theme.accent.primary};
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
`;

const FilterContainer = styled.div`
  margin-bottom: 2rem;
`;

export default Projects;
