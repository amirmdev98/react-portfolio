import React from 'react';
import styled from 'styled-components';

interface ProjectPlaceholderProps {
  projectTitle: string;
  className?: string;
}

export const ProjectPlaceholder: React.FC<ProjectPlaceholderProps> = ({ projectTitle, className }) => {
  // Extract first letter of each word for the logo
  const initials = projectTitle
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);

  return (
    <PlaceholderContainer className={className}>
      <GradientBackground />
      <Content>
        <Logo>{initials}</Logo>
        <ProjectName>{projectTitle}</ProjectName>
      </Content>
      <GridPattern />
    </PlaceholderContainer>
  );
};

const PlaceholderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.card};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.accent.primary}30,
    ${({ theme }) => theme.accent.secondary}30
  );
  z-index: 0;
`;

const GridPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
      0deg,
      ${({ theme }) => theme.background.card}10 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      ${({ theme }) => theme.background.card}10 1px,
      transparent 1px
    );
  background-size: 20px 20px;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.accent.primary},
    ${({ theme }) => theme.accent.secondary}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const ProjectName = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.background.card};
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

export default ProjectPlaceholder;
