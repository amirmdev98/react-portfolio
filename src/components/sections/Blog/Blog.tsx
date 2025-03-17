import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { BlogCard } from './BlogCard';
import { FilterTabs } from '../../common/FilterTabs';
import { staggerChildrenVariants, fadeInUpVariants } from '../../../hooks/useInView';
import { BlogPost, BlogCategory } from '../../../interfaces/blog';

const Section = styled.section`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  background: ${({ theme }) => theme.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 1.1rem;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  grid-column: 1 / -1;
  background: ${({ theme }) => theme.background.card};
  border-radius: 12px;
  color: ${({ theme }) => theme.text.secondary};
`;

// Blog posts data (in a real app this would come from an API or CMS)
const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building a Modern React Portfolio with TypeScript',
    description: 'Learn how to create a professional portfolio using React, TypeScript, and Styled Components to showcase your projects and skills.',
    content: '',
    date: '2023-09-15',
    readTime: '6 min read',
    tags: ['React', 'TypeScript', 'Portfolio', 'Frontend', 'Development'],
    image: '/blog/react-portfolio.jpg',
    slug: 'building-modern-react-portfolio'
  },
  {
    id: '2',
    title: 'Optimizing Performance in React Applications',
    description: 'Discover techniques to improve the performance of your React applications with code splitting, memoization, and virtual DOM optimization.',
    content: '',
    date: '2023-08-22',
    readTime: '8 min read',
    tags: ['React', 'Performance', 'Optimization', 'Frontend'],
    image: '/blog/react-performance.jpg',
    slug: 'optimizing-react-performance'
  },
  {
    id: '3',
    title: 'Introduction to Web3 Development with Ethereum',
    description: 'Explore the fundamentals of Web3 development with Ethereum, smart contracts, and decentralized applications (dApps).',
    content: '',
    date: '2023-07-18',
    readTime: '10 min read',
    tags: ['Web3', 'Ethereum', 'Blockchain', 'Development'],
    image: '/blog/web3-dev.jpg',
    slug: 'intro-web3-ethereum'
  },
  {
    id: '4',
    title: 'Leveraging AI in Modern Web Applications',
    description: 'Learn how to integrate AI services into your web applications to create smarter, more personalized user experiences.',
    content: '',
    date: '2023-06-05',
    readTime: '7 min read',
    tags: ['AI', 'Machine Learning', 'API', 'Development'],
    image: '/blog/ai-web-apps.jpg',
    slug: 'ai-in-web-applications'
  },
  {
    id: '5',
    title: 'CSS Grid vs Flexbox: When to Use Each',
    description: 'A comprehensive comparison of CSS Grid and Flexbox with practical examples to help you choose the right layout system for your projects.',
    content: '',
    date: '2023-05-12',
    readTime: '5 min read',
    tags: ['CSS', 'Frontend', 'Development', 'Tutorial'],
    image: '/blog/css-grid-flexbox.jpg',
    slug: 'css-grid-vs-flexbox'
  },
  {
    id: '6',
    title: 'Building a Personal Brand as a Developer',
    description: 'Tips and strategies for building your personal brand as a developer to stand out in the competitive tech industry.',
    content: '',
    date: '2023-04-20',
    readTime: '9 min read',
    tags: ['Career', 'Personal Branding', 'Development'],
    image: '/blog/developer-branding.jpg',
    slug: 'developer-personal-brand'
  }
];

// Available categories for filtering
const categories: BlogCategory[] = [
  'all', 
  'React', 
  'TypeScript', 
  'Development', 
  'Frontend', 
  'Performance', 
  'Web3', 
  'AI', 
  'Career'
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('all');
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();
  
  // Simulate loading state for a more realistic experience
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      controls.start("visible");
    }, 800);
    
    return () => clearTimeout(timer);
  }, [controls]);

  // Initialize animation when component mounts
  useEffect(() => {
    if (!isLoading) {
      controls.start("visible");
    }
  }, [controls, isLoading]);

  // Filter posts based on selected category
  const filteredPosts = activeCategory === 'all'
    ? samplePosts
    : samplePosts.filter(post => post.tags.includes(activeCategory));

  // Handle category change with animation reset
  const handleCategoryChange = (category: BlogCategory) => {
    if (category !== activeCategory) {
      controls.set("hidden");
      setTimeout(() => {
        setActiveCategory(category);
        controls.start("visible");
      }, 50);
    }
  };

  return (
    <Section id="blog">
      <Container>
        <Header>
          <Title>Latest Insights & Tutorials</Title>
          <Subtitle>
            Sharing my thoughts, experiences, and tutorials on web development, 
            emerging technologies, and career growth in the tech industry
          </Subtitle>
        </Header>

        <FilterTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {isLoading ? (
          <LoadingGrid>
            {[1, 2, 3].map(index => (
              <SkeletonCard key={index} />
            ))}
          </LoadingGrid>
        ) : (
          <Grid
            variants={staggerChildrenVariants}
            initial="hidden"
            animate={controls}
          >
            <AnimatePresence>
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <motion.div key={post.id} variants={fadeInUpVariants}>
                    <BlogCard post={post} />
                  </motion.div>
                ))
              ) : (
                <EmptyState>
                  <h3>No posts found</h3>
                  <p>No posts matching the selected category were found. Try another category.</p>
                </EmptyState>
              )}
            </AnimatePresence>
          </Grid>
        )}
      </Container>
    </Section>
  );
};

// Loading skeleton components for better UX
const LoadingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }
`;

const SkeletonCard = styled.div`
  background: ${({ theme }) => theme.background.card};
  border-radius: 12px;
  overflow: hidden;
  height: 380px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.background.card} 0%,
      ${({ theme }) => `${theme.background.secondary}50`} 50%,
      ${({ theme }) => theme.background.card} 100%
    );
    animation: shimmer 1.5s infinite;
    background-size: 200% 100%;
  }
  
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

export default Blog;
