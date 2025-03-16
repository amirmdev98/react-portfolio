import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import { BlogPost } from '../../../interfaces/blog';
import { fadeInUpVariants } from '../../../hooks/useInView';

const Card = styled(motion.article)`
  background: ${({ theme }) => theme.background.card};
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  
  &:hover img {
    transform: scale(1.05);
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
  transition: transform 0.5s ease;
`;

const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Meta = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 0.8rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 0.8rem;
  font-size: 1.25rem;
  line-height: 1.4;
  transition: color 0.3s ease;
  
  ${Card}:hover & {
    color: ${({ theme }) => theme.accent.primary};
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  margin-top: auto;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.accent.primary}15;
  color: ${({ theme }) => theme.accent.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const ReadMoreLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.accent.primary};
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  margin-top: auto;
  width: fit-content;
  position: relative;
  padding-bottom: 0.25rem;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.gradient.primary};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
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
          <MetaItem>
            <FaCalendarAlt size={14} />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </MetaItem>
          <MetaItem>
            <FaClock size={14} />
            <span>{post.readTime}</span>
          </MetaItem>
        </Meta>
        <Title>{post.title}</Title>
        <Description>{post.description}</Description>
        <Tags>
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <ReadMoreLink href={`/blog/${post.slug}`}>
          <span>Read More</span>
          <FaArrowRight size={14} />
        </ReadMoreLink>
      </Content>
    </Card>
  );
};
