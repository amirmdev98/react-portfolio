import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUpVariants, staggerChildrenVariants, rotateInVariants } from '../../../hooks/useInView';
import { AnimatedSection } from '../../common/AnimatedSection';

const SkillsSection = styled(AnimatedSection)`
  padding: 5rem 0;
  background: ${({ theme }) => theme.background.secondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.background.card};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled(motion.div)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accent.primary};
  margin-bottom: 1rem;
`;

const SkillTitle = styled.h3`
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const SkillDescription = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.9rem;
  line-height: 1.5;
`;

const Skills = () => {
  const skills = [
    {
      icon: "💻",
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS",
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Building scalable server-side applications with Node.js, Express, and databases",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user experiences with attention to detail",
    },
    {
      icon: "🚀",
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, accessibility, and SEO",
    },
  ];

  return (
    <SkillsSection id="skills" variants={fadeInUpVariants}>
      <Container>
        <Header>
          <Title
            variants={rotateInVariants}
            initial="hidden"
            animate="visible"
          >
            My Skills
          </Title>
          <Subtitle
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Here are some of the technologies and skills I work with
          </Subtitle>
        </Header>

        <Grid
          variants={staggerChildrenVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: index * 0.1 }}
            >
              <IconWrapper>{skill.icon}</IconWrapper>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </Grid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
