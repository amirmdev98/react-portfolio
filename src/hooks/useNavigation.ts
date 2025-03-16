import { useState, useEffect } from 'react';
import { navItems } from '../configs/personalInfo';

// Extract section names from navItems for typesafety
type Section = typeof navItems[number]['to'];

export const useNavigation = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.to);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) as Section | undefined;

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
