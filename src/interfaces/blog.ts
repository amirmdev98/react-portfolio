export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  slug: string;
}

export type BlogCategory = 
  | 'all' 
  | 'tech' 
  | 'development' 
  | 'career' 
  | 'tutorial' 
  | 'React' 
  | 'TypeScript' 
  | 'Development' 
  | 'Frontend' 
  | 'Performance' 
  | 'Web3' 
  | 'AI' 
  | 'Career';
