import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { RiTerminalBoxLine } from "react-icons/ri";
import { FaMoon, FaSun } from "react-icons/fa";
import Hero from "./components/Sections/Hero";
import Skills from "./components/Sections/Skills";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import { ThemeWrapper, useTheme } from "./styles/ThemeProvider";

// Animation variants
const hoverScale = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const AppContent = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const isDark = theme.name === "dark";

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact"];
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <Background>
        <GlowingOrb />
      </Background>

      <Header>
        <HeaderContent>
          <Brand>
            <RiTerminalBoxLine size={24} />
            <BrandName>AMD</BrandName>
          </Brand>

          <Navigation>
            {[
              { id: "home", label: "Home" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <NavItem
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                $isActive={activeSection === item.id}
                as={motion.button}
                whileHover="hover"
                whileTap="tap"
                variants={hoverScale}
              >
                {item.label}
              </NavItem>
            ))}
            <ThemeToggle onClick={toggleTheme}>
              {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </ThemeToggle>
          </Navigation>
        </HeaderContent>
      </Header>

      <Main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </Main>
    </Layout>
  );
};

const App = () => (
  <ThemeWrapper>
    <AppContent />
  </ThemeWrapper>
);

const Layout = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: ${({ theme }) => theme.background.primary};
`;

const GlowingOrb = styled.div`
  position: absolute;
  top: -15vh;
  right: -15vh;
  width: 50vh;
  height: 50vh;
  border-radius: 50%;
  background: ${({ theme }) => theme.accent.primary};
  filter: blur(100px);
  opacity: 0.1;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  height: 80px;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.accent.primary};
`;

const BrandName = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  background: ${({ theme }) => theme.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled(motion.button)<{ $isActive: boolean }>`
  background: transparent;
  border: none;
  padding: 0.5rem 1rem;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.accent.primary : theme.text.primary};
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? "100%" : "0")};
    height: 2px;
    background: ${({ theme }) => theme.gradient.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.accent.primary};
`;

const Main = styled.main`
  padding-top: 80px; /* Header height */
`;

const CenteredSection = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;

export default App;
