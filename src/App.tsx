import { useState } from "react";
import { Layout, Typography } from "./components";
import {
  CopyButton,
  EmailContainer,
  Photo,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Text,
} from "./styles";

const App = () => {
  const [copied, setCopied] = useState(false);
  const [copiedText, setCopiedText] = useState("Copiar");

  const email = "carolinasandovalg6@gmail.com";

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(email);
    setCopiedText("Correo copiado");
    setCopied(true);
    setTimeout(() => {
      setCopiedText("Copiar");
      setCopied(false);
    }, 2000);
  };

  const handleMouseEnter = () => {
    if (!copied) {
      setCopiedText("Copiar");
    }
  };

  return (
    <Layout>
      <Section1 id="section1">
        <Text>
          <Typography variant="h1">Carolina Sandoval</Typography>
          <Typography variant="title1">Frontend Web Developer </Typography>
          <EmailContainer>
            <a href={`mailto:${email}`}>{email}</a>
            {/* <CopyButton
              onClick={copyToClipBoard}
              onMouseEnter={handleMouseEnter}
            >
              <img src="/copy-icon.svg" alt="" />
              {copiedText}
            </CopyButton> */}
          </EmailContainer>
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
