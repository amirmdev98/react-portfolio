import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BlogCard } from './BlogCard';
import { FilterTabs } from '../../common/FilterTabs';
import { useAnimatedInView, staggerChildrenVariants } from '../../../hooks/useInView';
import { BlogPost, BlogCategory } from '../../../interfaces/blog';

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

// Sample blog posts (replace with your actual data)
const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building a Modern React Portfolio',
    description: 'Learn how to create a professional portfolio using React and TypeScript',
    content: '',
    date: '2025-03-08',
    readTime: '5 min read',
    tags: ['React', 'TypeScript', 'Portfolio'],
    image: '/blog/portfolio.jpg',
    slug: 'building-modern-react-portfolio'
  },
  // Add more sample posts
];

const categories: BlogCategory[] = ['all', 'tech', 'development', 'career', 'tutorial'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('all');
  const { ref, controls } = useAnimatedInView();

  const filteredPosts = samplePosts.filter(
    post => activeCategory === 'all' || post.tags.includes(activeCategory)
  );

  return (
    <Section id="blog">
      <Container>
        <Header>
          <Title>Latest Blog Posts</Title>
          <Subtitle>
            Sharing my thoughts and experiences in web development
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
          {filteredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Blog;
