/**
 * Personal information configuration file
 * Update this file to change your information across the entire portfolio
 */

// Social media and contact information
export const contactInfo = {
  email: "amirm.dev8@gmail.com",
  github: {
    username: "amirdavoodi98",
    url: "https://github.com/amirdavoodi98",
  },
  linkedin: {
    username: "amirmohamad-davoodi",
    url: "https://linkedin.com/in/amirmohamad-davoodi",
  },
  location: "Seattle, WA",
};

// Personal details
export const personalDetails = {
  fullName: "Amir Mohamad Davoodi",
  title: "Full Stack Developer",
  bio: "Passionate about building exceptional digital experiences with modern technologies. Specialized in React, Node.js, and cloud solutions.",
  profileImage: "/images/a2.jpg",
};

// Resume information
export const resumeInfo = {
  resumeLink: "/resume.pdf",
};

// Project categories
export const projectCategories = [
  "All",
  "React",
  "Node.js",
  "TypeScript",
  "UI/UX",
  "Mobile",
];

// Blog categories
export const blogCategories = [
  "All",
  "Web Development",
  "UI/UX Design",
  "Mobile Development",
  "DevOps",
  "Career",
];

// Skills information
export const skillsData = {
  frontEnd: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "CSS/SCSS", level: 85 },
    { name: "Styled Components", level: 90 },
  ],
  backEnd: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 80 },
    { name: "RESTful APIs", level: 90 },
  ],
  devOps: [
    { name: "Git", level: 85 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
    { name: "CI/CD", level: 75 },
  ],
  other: [
    { name: "Agile Methodologies", level: 80 },
    { name: "Testing", level: 75 },
    { name: "Performance Optimization", level: 80 },
  ],
};

// Project configuration
export const projects = [
  {
    id: 1,
    title: "Propision",
    description: "A comprehensive platform for creating and managing business proposals with advanced features and analytics.",
    image: "/projects/name-propision.png",
    tags: ["web", "all"],
    sourceCode: "#",
    liveDemo: "https://propision.com",
    technologies: ["React", "Node.js", "PostgreSQL", "Django", "Celery", "DL", "Docker"]
  },
  {
    id: 2,
    title: "Metriland",
    description: "An innovative real estate platform with advanced property metrics and visualization tools.",
    image: "/projects/name-metriland.png",
    tags: ["web", "all"],
    sourceCode: "#",
    liveDemo: "https://metriland.com",
    technologies: ["React", "Django", "PostgreSQL", "Microservices", "Docker"]
  },
  {
    id: 3,
    title: "DaftarFile",
    description: "A secure document management and file organization system with collaboration features.",
    image: "/projects/name-daftarfile.png",
    tags: ["web", "all"],
    sourceCode: "#",
    liveDemo: "https://daftarfile.com",
    technologies: ["Django", "PostgreSQL", "React", "Node.js", "Docker"]
  },
  {
    id: 4,
    title: "Tokenision",
    description: "A blockchain-based platform for token creation and management with smart contract capabilities.",
    image: "/projects/name-tokenision.png",
    tags: ["web", "blockchain", "all"],
    sourceCode: "#",
    liveDemo: "https://tokenision.com",
    technologies: ["React", "Solidity", "Web3.js", "Django", "Docker"]
  },
  {
    id: 5,
    title: "Sangyab",
    description: "An e-commerce solution with advanced inventory management and analytics dashboard.",
    image: "/projects/name-sangyab.png",
    tags: ["web", "all"],
    sourceCode: "#",
    liveDemo: "https://sangyab.com",
    technologies: ["React", "Redux", "Node.js", "PostgreSQL", "Django", "Docker"]
  }
];

// Color theme preferences (if needed)
export const themePreferences = {
  primaryColor: "#8a2be2", // Adjust to match your current theme
  secondaryColor: "#ff5a5f",
};

// Navigation items
export const navItems = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Blog", to: "blog" },
  { label: "Contact", to: "contact" },
];

// Blog posts
export const blogPosts = [
  {
    id: "1",
    title: "10 React Performance Optimization Techniques",
    description: "Learn how to make your React applications blazing fast with these performance optimization strategies.",
    content: `
      # 10 React Performance Optimization Techniques
      
      React is a fast library by default, but there are always ways to squeeze out more performance. Here are 10 techniques to make your React apps even faster.
      
      ## 1. Use React.memo for Component Memoization
      
      Prevent unnecessary re-renders by memoizing components that don't need to re-render when their parent does.
      
      \`\`\`jsx
      const MyComponent = React.memo(function MyComponent(props) {
        // your component logic
      });
      \`\`\`
      
      ## 2. Virtualize Long Lists
      
      Use a library like react-window or react-virtualized to only render visible items in long lists.
      
      ## 3. Code Splitting with React.lazy
      
      Split your code into smaller chunks that load on demand.
      
      \`\`\`jsx
      const LazyComponent = React.lazy(() => import('./LazyComponent'));
      \`\`\`
      
      ## 4. Avoid Anonymous Functions in Render
      
      Define event handlers outside the render method to prevent unnecessary re-creation.
      
      ## 5. Use Web Workers for CPU-intensive Tasks
      
      Offload heavy computations to a separate thread.
      
      ## 6. Implement Proper Keys in Lists
      
      Always use proper keys in lists to help React identify which items have changed.
      
      ## 7. Avoid Inline Object Creation in JSX
      
      Pre-define style objects and props outside the render method.
      
      ## 8. Use Production Builds
      
      Always use production builds in production to remove development warnings and checks.
      
      ## 9. Implement Windowing for Large Data Sets
      
      Only render what's visible in the viewport for large data sets.
      
      ## 10. Use React Profiler to Find Bottlenecks
      
      Use the React Developer Tools Profiler to identify components that are rendering too often or taking too long to render.
    `,
    date: "2025-02-25",
    readTime: "8 min",
    tags: ["React", "Performance", "Frontend", "Development"],
    image: "/blog/react-performance.jpg",
    slug: "react-performance-optimization"
  },
  {
    id: "2",
    title: "TypeScript Tips and Tricks for Better Code",
    description: "Advanced TypeScript patterns and techniques that will improve your code quality and developer experience.",
    content: `
      # TypeScript Tips and Tricks for Better Code
      
      TypeScript has become an essential tool for many JavaScript developers. Here are some advanced tips to level up your TypeScript skills.
      
      ## Utility Types
      
      TypeScript comes with several built-in utility types that can save you time and make your code more robust:
      
      \`\`\`typescript
      // Pick specific properties from a type
      type User = {
        id: number;
        name: string;
        email: string;
        role: string;
      };
      
      type UserBasicInfo = Pick<User, 'name' | 'email'>;
      
      // Omit specific properties
      type UserWithoutId = Omit<User, 'id'>;
      
      // Make all properties optional
      type PartialUser = Partial<User>;
      
      // Make all properties required
      type RequiredUser = Required<User>;
      
      // Extract the return type of a function
      function createUser() {
        return { id: 1, name: 'John' };
      }
      
      type CreateUserReturn = ReturnType<typeof createUser>;
      \`\`\`
      
      ## Discriminated Unions
      
      A powerful pattern for managing different related types:
      
      \`\`\`typescript
      type Success = {
        status: 'success';
        data: any;
      };
      
      type Error = {
        status: 'error';
        error: string;
      };
      
      type Response = Success | Error;
      
      function handleResponse(response: Response) {
        if (response.status === 'success') {
          // TypeScript knows this is a Success type
          console.log(response.data);
        } else {
          // TypeScript knows this is an Error type
          console.log(response.error);
        }
      }
      \`\`\`
      
      ## Template Literal Types
      
      Create powerful string manipulations at the type level:
      
      \`\`\`typescript
      type EventName = 'click' | 'change' | 'mouseenter';
      type EventHandler = \`on\${Capitalize<EventName>}\`;
      // Result: 'onClick' | 'onChange' | 'onMouseenter'
      \`\`\`
      
      ## Type Guards
      
      Custom functions to narrow down types:
      
      \`\`\`typescript
      function isString(value: unknown): value is string {
        return typeof value === 'string';
      }
      
      function processInput(input: unknown) {
        if (isString(input)) {
          // TypeScript knows input is a string here
          return input.toUpperCase();
        }
        return String(input);
      }
      \`\`\`
      
      ## Mapped Types
      
      Transform existing types into new ones:
      
      \`\`\`typescript
      type Readonly<T> = {
        readonly [P in keyof T]: T[P];
      };
      
      // Create a type with all properties as optional
      type Optional<T> = {
        [P in keyof T]?: T[P];
      };
      \`\`\`
      
      These advanced TypeScript features can help you write more robust, maintainable code with fewer bugs and better developer experience.
    `,
    date: "2025-01-20",
    readTime: "12 min",
    tags: ["TypeScript", "Development", "Frontend"],
    image: "/blog/typescript-tips.jpg",
    slug: "typescript-tips-and-tricks"
  },
  {
    id: "3",
    title: "The Future of Web3: Beyond Blockchain",
    description: "Exploring emerging trends in Web3 technologies and how they're reshaping the internet as we know it.",
    content: `
      # The Future of Web3: Beyond Blockchain
      
      Web3 is often discussed primarily in terms of blockchain and cryptocurrencies, but the ecosystem is evolving far beyond these foundational technologies. This article explores where Web3 is headed and what we can expect in the coming years.
      
      ## Decentralized Identity
      
      One of the most promising areas of Web3 development is decentralized identity systems. These systems give users control over their personal data and digital identity, rather than relying on centralized platforms like Google or Facebook.
      
      ## Inter-Protocol Operability
      
      As the Web3 ecosystem matures, we're seeing increased focus on making different protocols and blockchains work together seamlessly. This interoperability is essential for creating a truly decentralized web.
      
      ## Decentralized Autonomous Organizations (DAOs)
      
      DAOs represent a new way of organizing collective efforts through code rather than traditional hierarchical structures. They're becoming increasingly sophisticated and are being used for everything from investment funds to governance systems.
      
      ## Zero-Knowledge Proofs
      
      Zero-knowledge proofs allow one party to prove to another that they know a value without conveying any other information. This technology is unlocking new possibilities for privacy and security in Web3 applications.
      
      ## The Social Layer
      
      Web3 is developing a social layer that reimagines how online communities form and interact. From social tokens to reputation systems, these technologies are creating new models for human coordination.
      
      ## Real-World Asset Tokenization
      
      The tokenization of real-world assets—from real estate to art—is making previously illiquid assets more accessible and divisible, potentially democratizing access to investment opportunities.
      
      ## Ecological Sustainability
      
      As awareness of blockchain's environmental impact grows, we're seeing more focus on developing sustainable consensus mechanisms and carbon-negative blockchain systems.
      
      ## Conclusion
      
      The future of Web3 extends far beyond cryptocurrencies and NFTs. These emerging technologies and trends point toward a more open, user-controlled internet where users own their data, assets, and digital identities.
    `,
    date: "2025-03-05",
    readTime: "10 min",
    tags: ["Web3", "Blockchain", "Development", "tech"],
    image: "/blog/web3-future.jpg",
    slug: "future-of-web3-beyond-blockchain"
  },
  {
    id: "4",
    title: "How AI is Transforming Software Development",
    description: "An in-depth look at how artificial intelligence tools are changing the way we code and what it means for developers.",
    content: `
      # How AI is Transforming Software Development
      
      Artificial intelligence is rapidly changing how software is created. From code generation to debugging, AI tools are becoming an essential part of the modern developer's toolkit. Let's explore how this transformation is happening and what it means for the future of programming.
      
      ## Code Generation and Completion
      
      AI code assistants can now generate entire functions or suggest completions based on context, greatly accelerating development speed. Tools like GitHub Copilot, which is built on large language models, can understand the intent behind comments and generate corresponding code.
      
      \`\`\`javascript
      // Example: An AI assistant generating a function to calculate fibonacci numbers
      function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
      }
      \`\`\`
      
      ## Automated Testing and Bug Detection
      
      AI is revolutionizing testing by automatically generating test cases and identifying potential bugs before code is even deployed. Some tools can analyze patterns in your codebase to predict where bugs might occur.
      
      ## Natural Language Programming
      
      The barrier between natural language and programming languages is breaking down. Developers can now describe what they want in plain English, and AI can translate that into executable code.
      
      ## Code Refactoring and Optimization
      
      AI tools can analyze code bases and suggest refactoring opportunities or performance optimizations that might be missed by human developers.
      
      ## Personalized Learning and Documentation
      
      For those learning to code, AI tutors can provide personalized guidance based on individual learning styles and progress. Similarly, AI can generate and update documentation, keeping it synchronized with code changes.
      
      ## Low-Code and No-Code Platforms
      
      AI-powered low-code and no-code platforms are making software development accessible to non-programmers, enabling them to create applications through visual interfaces and natural language instructions.
      
      ## Implications for Developers
      
      While these advancements raise questions about the future role of human programmers, the reality is that AI is becoming a collaborative tool that handles routine tasks, allowing developers to focus on more creative and complex aspects of software development.
      
      Rather than replacing developers, AI is augmenting their capabilities and potentially transforming the skills that will be most valuable in the future. Understanding how to effectively prompt and direct AI tools may become as important as traditional coding skills.
      
      ## Conclusion
      
      The integration of AI into software development represents one of the most significant shifts in programming since the advent of high-level languages. By embracing these tools and adapting to work alongside AI, developers can achieve unprecedented levels of productivity and focus their energy on solving the most challenging and interesting problems.
    `,
    date: "2025-03-12",
    readTime: "11 min",
    tags: ["AI", "Development", "tech", "Career"],
    image: "/blog/ai-future.jpg",
    slug: "ai-transforming-software-development"
  }
];
