import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Project, ProjectCategory } from '../../../interfaces/project';
import { FilterTabs } from '../../common/FilterTabs';
import { useAnimatedInView, staggerChildrenVariants } from '../../../hooks/useInView';

const Section = styled.section`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.article)`
  background: ${({ theme }) => theme.background.card};
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Technologies = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const Tech = styled.span`
  background: ${({ theme }) => theme.accent.primary}20;
  color: ${({ theme }) => theme.accent.primary};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.accent.primary};
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

// Sample projects (replace with your actual data)
const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React and TypeScript',
    image: '/projects/portfolio.jpg',
    technologies: ['React', 'TypeScript', 'Styled Components'],
    category: 'frontend',
    demoUrl: 'https://portfolio.com',
    githubUrl: 'https://github.com/portfolio',
    featured: true
  },
  // Add more sample projects
];

const categories: ProjectCategory[] = ['all', 'frontend', 'backend', 'fullstack', 'mobile'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const { ref, controls } = useAnimatedInView();

  const filteredProjects = sampleProjects.filter(
    project => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <Section id="projects">
      <Container>
        <Header>
          <Title>Featured Projects</Title>
          <Subtitle>
            A collection of my best work in web and mobile development
          </Subtitle>
        </Header>

        <FilterTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <Grid
          ref={ref}
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={controls}
        >
          {filteredProjects.map(project => (
            <ProjectCard key={project.id}>
              <ProjectImage src={project.image} alt={project.title} loading="lazy" />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <Technologies>
                  {project.technologies.map(tech => (
                    <Tech key={tech}>{tech}</Tech>
                  ))}
                </Technologies>
                <Links>
                  {project.demoUrl && (
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </Link>
                  )}
                </Links>
              </ProjectContent>
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Projects;
