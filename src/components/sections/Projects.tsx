import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Section } from "../../styles/SharedStyles";
import { projects } from "../../configs/personalInfo";
import { useState } from "react";
import { FilterTabs } from "../common/FilterTabs";
import ProjectNamePlaceholder from '../common/ProjectNamePlaceholder';

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
const uniqueCategories = new Set(projects.flatMap(project => project.tags.filter(tag => tag !== "all")));
const allCategories = ["all", ...uniqueCategories];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animateProjects, setAnimateProjects] = useState(true);
  
  // Filter projects based on selected category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeCategory));

  // Handle category change with animation reset
  const handleCategoryChange = (category: string) => {
    if (category !== activeCategory) {
      setAnimateProjects(false);
      setTimeout(() => {
        setActiveCategory(category);
        setAnimateProjects(true);
      }, 50);
    }
  };

  // Helper function to assign a color scheme based on project ID
  const getColorScheme = (id: number): 'purple' | 'blue' | 'green' | 'red' => {
    const schemes: ('purple' | 'blue' | 'green' | 'red')[] = ['purple', 'blue', 'green', 'red'];
    return schemes[(id - 1) % schemes.length];
  };

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
          onCategoryChange={handleCategoryChange}
        />
      </FilterContainer>

      <ProjectsGrid
        as={motion.div}
        key={activeCategory} // Add key to force re-render when category changes
        variants={containerVariants}
        initial="hidden"
        animate={animateProjects ? "visible" : "hidden"}
        viewport={{ once: true, amount: 0.2 }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            as={motion.div}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onClick={() => window.open(project.liveDemo, '_blank', 'noopener,noreferrer')}
          >
            <ProjectImageWrapper>
              <ProjectNamePlaceholder 
                name={project.title} 
                tagline={project.technologies.slice(0, 3).join(' • ')}
                colorScheme={getColorScheme(project.id)}
              />
            </ProjectImageWrapper>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.technologies.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </TechStack>
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
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
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
  height: 100%;
  min-height: 450px;

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
  height: 300px;
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  margin: 0;
  padding: 0;
  flex-grow: 0;
  flex-shrink: 0;
`;

const ProjectContent = styled.div`
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text.primary};
  margin: 0;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
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
