export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack' | 'mobile';
