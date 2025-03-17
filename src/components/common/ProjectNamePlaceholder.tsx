import React from 'react';
import styled from 'styled-components';

interface ProjectNamePlaceholderProps {
  name: string;
  tagline?: string;
  colorScheme?: 'purple' | 'blue' | 'green' | 'red';
}

const PlaceholderContainer = styled.div<{ $colorScheme: string }>`
  width: 100%;
  height: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ $colorScheme }) => {
    switch ($colorScheme) {
      case 'blue':
        return 'linear-gradient(135deg, #2a2a72 0%, #1565C0 100%)';
      case 'green':
        return 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)';
      case 'red':
        return 'linear-gradient(135deg, #cb2d3e 0%, #ef473a 100%)';
      case 'purple':
      default:
        return 'linear-gradient(135deg, #2a2a72 0%, #470f80 100%)';
    }
  }};
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin: 0;
  padding: 0;
  display: block;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05) 10px,
      rgba(255, 255, 255, 0.02) 10px,
      rgba(255, 255, 255, 0.02) 20px
    );
  }
`;

const ContentWrapper = styled.div`
  z-index: 1;
  text-align: center;
  padding: 2rem;
  margin: 0;
`;

const ProjectName = styled.h2`
  font-size: calc(1.5rem + 2vw);
  font-weight: 800;
  color: white;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  margin: 0;
  letter-spacing: -1px;
`;

const TagLine = styled.p`
  font-size: calc(0.8rem + 0.5vw);
  color: rgba(255, 255, 255, 0.8);
  margin-top: 1rem;
  margin-bottom: 0;
`;

const ProjectNamePlaceholder: React.FC<ProjectNamePlaceholderProps> = ({ 
  name, 
  tagline, 
  colorScheme = 'purple' 
}) => {
  return (
    <PlaceholderContainer $colorScheme={colorScheme}>
      <ContentWrapper>
        <ProjectName>{name}</ProjectName>
        {tagline && <TagLine>{tagline}</TagLine>}
      </ContentWrapper>
    </PlaceholderContainer>
  );
};

export default ProjectNamePlaceholder;
