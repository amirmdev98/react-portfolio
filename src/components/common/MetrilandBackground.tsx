import React from 'react';
import styled from 'styled-components';

interface MetrilandBackgroundProps {
  projectTitle: string;
  className?: string;
}

export const MetrilandBackground: React.FC<MetrilandBackgroundProps> = ({ projectTitle, className }) => {
  // Generate a consistent color based on project title
  const generateColor = (title: string) => {
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
      hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const c1 = (hash & 0x00FFFFFF).toString(16).padStart(6, '0');
    const c2 = ((hash >> 8) & 0x00FFFFFF).toString(16).padStart(6, '0');
    
    return { 
      primary: `#${c1}`,
      secondary: `#${c2}`
    };
  };

  const colors = generateColor(projectTitle);
  
  return (
    <Container className={className}>
      <Gradient colors={colors} />
      <Grid />
      <Content>
        <ProjectLogo>{projectTitle.substring(0, 1).toUpperCase()}</ProjectLogo>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Gradient = styled.div<{ colors: { primary: string; secondary: string } }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    ${props => `${props.colors.primary}90`},
    ${props => `${props.colors.secondary}90`}
  );
  z-index: 1;
`;

const Grid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  z-index: 2;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

const ProjectLogo = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.accent.primary},
    ${({ theme }) => theme.accent.secondary}
  );
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

export default MetrilandBackground;
