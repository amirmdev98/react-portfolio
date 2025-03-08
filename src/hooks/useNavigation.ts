import { useState, useEffect } from 'react';

type Section = 'home' | 'skills' | 'projects' | 'contact';

export const useNavigation = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections: Section[] = ['home', 'skills', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: Section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    activeSection,
    scrollToSection,
  };
};

export type { Section };
