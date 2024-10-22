import { useState } from "react";
import { Layout, Tooltip, Typography } from "./components";
import {
  CopiedText,
  CopyButton,
  EmailContainer,
  EmailLink,
  Photo,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  HomeText,
  AboutMeText,
} from "./styles";

const App = () => {
  const [copied, setCopied] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const email = "carolinasandovalg6@gmail.com";

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(email);
    setCopiedText("¡Correo copiado!");
    setCopied(true);
    setTimeout(() => {
      setCopiedText("");
      setCopied(false);
    }, 2000);
  };

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <Layout>
      <Section1 id="section1">
        <Photo>
          <img src="perfil.jpeg" alt="" />
        </Photo>
        <HomeText>
          <Typography variant="h1">Carolina Sandoval</Typography>
          <Typography variant="title1">Frontend Web Developer </Typography>
          <EmailContainer>
            <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            <CopyButton
              onClick={copyToClipBoard}
              onMouseEnter={showTooltip}
              onMouseLeave={hideTooltip}
            >
              <img src="/copy-icon.svg" alt="" />
              <CopiedText>{copiedText}</CopiedText>
              <Tooltip text="Copiar" $visible={isTooltipVisible} />
            </CopyButton>
          </EmailContainer>
        </HomeText>
      </Section1>

      <Section2 id="section2">
        <AboutMeText>
          <Typography variant="h2">Sobre Mí</Typography>
          <Typography variant="description" style={{ lineHeight: 1.8 }}>
            Después de años trabajando en el área de salud, ventas y atención al
            público, descubrí mi pasión por la programación.
            <br />
            Soy Desarrolladora Frontend, tengo conocimientos en construcción de
            aplicaciones Web con ReactJs y NextJS.
            <br />
            Me considero una persona curiosa lo que me ha llevado a tener
            siempre un buen desempeño en mis trabajos, me gusta aprender y
            resolver problemas, soy comprometida y responsable con lo que hago.
            <br />
            Estoy ansiosa de unirme a un equipo de desarrollo donde pueda seguir
            aprendiendo, contribuir con soluciones técnicas mientras crezco como
            desarrolladora y ganar experiencia haciendo lo que me gusta. <br />
            También me gustan los gatos, los libros y la música de BTS 💜.
            <p></p>
          </Typography>
        </AboutMeText>
        <div style={{ backgroundColor: "blue", width: 300, height: 300 }}></div>
      </Section2>
      <Section3 id="section3">conocimientos</Section3>
      <Section4 id="section4">proyecto</Section4>
      <Section5 id="section5">contacto</Section5>
    </Layout>
  );
};

export default App;
