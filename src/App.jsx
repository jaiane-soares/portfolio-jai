import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import AboutMe     from './components/AboutMe';
import Certificate from './components/Certificate';
import Projects    from './components/Projects';
import Skills      from './components/Skills';
import Contact     from './components/Contact';
import Divider     from './components/Divider';
import './styles/global.css';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Divider />

        <AboutMe />
        <Divider />

        <Certificate />
        <Divider />

        <Projects />
        <Divider />

        <Skills />
        <Divider />

        <Contact />
      </main>
    </>
  );
}
