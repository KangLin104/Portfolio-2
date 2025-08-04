import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/Sections/HeroSection'
import SkillSection from './components/Sections/SkillSection'
import ProjectSection from './components/Sections/ProjectSection'
import AboutSection from './components/Sections/AboutSection'
import ContactSection from './components/Sections/ContactSection'

function App() {

  return (
    <ThemeProvider>
        <Navbar />
        <HeroSection />
        <SkillSection/>
        <AboutSection />
        <ProjectSection />
        <ContactSection />
    </ThemeProvider>

  )
}

export default App
