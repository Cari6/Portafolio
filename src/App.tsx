import {
  AboutMeSection,
  HomeSection,
  Layout,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from "./components";

const App = () => {
  return (
    <Layout>
      <HomeSection id="section1" />
      <AboutMeSection id="section2" />
      <SkillsSection id="section3" />
      <ProjectsSection id="section4" />
      <ContactSection id="section5" />
    </Layout>
  );
};

export default App;
