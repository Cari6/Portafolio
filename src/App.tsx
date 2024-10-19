import { Layout, Typography } from "./components";
import {
  Photo,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Text,
} from "./styles";

const App = () => {
  return (
    <Layout>
      <Section1 id="section1">
        <Text>
          <Typography variant="h1">Carolina Sandoval</Typography>
          <Typography variant="title1">Frontend Web Developer </Typography>
          <div>correo</div>
        </Text>
        <Photo>foto</Photo>
      </Section1>
      <Section2 id="section2">sobre mi</Section2>
      <Section3 id="section3">conocimientos</Section3>
      <Section4 id="section4">proyecto</Section4>
      <Section5 id="section5">contacto</Section5>
    </Layout>
  );
};

export default App;
