import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaCode,
  FaMobileAlt,
} from "react-icons/fa";
import { Section } from "../../styles/SharedStyles";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const barVariants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  }),
};

// Skills data
const skillsData = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <FaReact size={30} />,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "CSS / Styled Components", level: 88 },
      { name: "Redux / Context API", level: 85 },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <FaNodeJs size={30} />,
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 82 },
      { name: "Microservices", level: 80 },
    ],
  },
  {
    id: 3,
    title: "Database & DevOps",
    icon: <FaDatabase size={30} />,
    skills: [
      { name: "PostgreSQL / MongoDB", level: 85 },
      { name: "Docker / Kubernetes", level: 80 },
      { name: "AWS / Cloud Services", level: 82 },
      { name: "CI/CD Pipelines", level: 78 },
    ],
  },
  {
    id: 4,
    title: "Tools & Practices",
    icon: <FaTools size={30} />,
    skills: [
      { name: "Git / Version Control", level: 90 },
      { name: "Agile Methodology", level: 85 },
      { name: "Testing (Jest/Cypress)", level: 82 },
      { name: "Performance Optimization", level: 85 },
    ],
  },
  {
    id: 5,
    title: "Programming Languages",
    icon: <FaCode size={30} />,
    skills: [
      { name: "JavaScript / TypeScript", level: 92 },
      { name: "Python", level: 80 },
      { name: "Go", level: 75 },
      { name: "C#", level: 78 },
    ],
  },
  {
    id: 6,
    title: "Mobile Development",
    icon: <FaMobileAlt size={30} />,
    skills: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 70 },
      { name: "Mobile UI/UX", level: 82 },
      { name: "App Performance", level: 78 },
    ],
  },
];

const Skills = () => (
  <Section id="skills">
    <SectionHeader>
      <SectionTitle>Technical Skills</SectionTitle>
      <SectionSubtitle>My professional skillset & proficiency</SectionSubtitle>
    </SectionHeader>

    <SkillGrid
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {skillsData.map((category) => (
        <SkillCard key={category.id} as={motion.div} variants={itemVariants}>
          <CardHeader>
            <IconWrapper>{category.icon}</IconWrapper>
            <CardTitle>{category.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {category.skills.map((skill) => (
              <SkillItem key={skill.name}>
                <SkillHeader>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel>{skill.level}%</SkillLevel>
                </SkillHeader>
                <ProgressBar>
                  <Progress
                    as={motion.div}
                    custom={skill.level}
                    variants={barVariants}
                  />
                </ProgressBar>
              </SkillItem>
            ))}
          </CardContent>
          <CardGlow />
        </SkillCard>
      ))}
    </SkillGrid>
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

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

const SkillCard = styled.div`
  background: ${({ theme }) => theme.background.card};
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
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

  ${SkillCard}:hover & {
    opacity: 1;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.background.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: ${({ theme }) => theme.accent.primary};
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text.primary};
  font-weight: 600;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SkillName = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text.secondary};
`;

const SkillLevel = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.accent.primary};
  font-weight: 600;
`;

const ProgressBar = styled.div`
  background: ${({ theme }) => theme.background.secondary};
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.gradient.primary};
  border-radius: 4px;
`;

export default Skills;
