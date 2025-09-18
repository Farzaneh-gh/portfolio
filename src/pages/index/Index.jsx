import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import AboutMe from "../../components/About/AboutMe";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import ContactSection from "../../components/ContactMe/ContactMe";
import Footer from "../../components/Footer/Footer";

const Index = () => {
  return (
    <div className="bg-white overflow-hidden">
      <Navbar />
      <main>
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
