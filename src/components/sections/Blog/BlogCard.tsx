import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BlogPost } from '../../../interfaces/blog';
import { fadeInUpVariants } from '../../../hooks/useInView';

const Card = styled(motion.article)`
  background: ${({ theme }) => theme.background.card};
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Meta = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 0.5rem;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.accent.primary}20;
  color: ${({ theme }) => theme.accent.primary};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
`;

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card variants={fadeInUpVariants}>
      <ImageContainer>
        <Image src={post.image} alt={post.title} loading="lazy" />
      </ImageContainer>
      <Content>
        <Meta>
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>{post.readTime}</span>
        </Meta>
        <Title>{post.title}</Title>
        <Description>{post.description}</Description>
        <Tags>
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </Content>
    </Card>
  );
};
