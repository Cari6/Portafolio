import { useState } from "react";
import {
  Layout,
  Modal,
  Project,
  Skills,
  Tooltip,
  Typography,
} from "./components";
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
  SkillContainer,
  SkillSection,
  ProjectsContainer,
} from "./styles";
import { LenguageSkills, OtherSkills, ToolSkills } from "./utils/skills";
import useTooltip from "./hooks/useTooltip";

const App = () => {
  const [copied, setCopied] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const { isTooltipVisible, showTooltip, hideTooltip } = useTooltip();

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
        <Typography variant="h2">Sobre Mí</Typography>
        <AboutMeText>
          <Typography
            variant="description"
            style={{
              lineHeight: 1.8,
              width: "100%",
            }}
          >
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
          <div
            style={{ backgroundColor: "blue", width: 200, height: 200 }}
          ></div>
        </AboutMeText>
      </Section2>

      <Section3 id="section3">
        <Typography variant="h2">Conocimientos</Typography>

        <SkillContainer>
          <SkillSection>
            {LenguageSkills.map((item, index) => (
              <Skills key={index} {...item} />
            ))}
          </SkillSection>

          <SkillSection>
            {ToolSkills.map((item, index) => (
              <Skills $variant="alternative" key={index} {...item} />
            ))}
          </SkillSection>

          <SkillSection>
            {OtherSkills.map((item, index) => (
              <Skills key={index} {...item} />
            ))}
          </SkillSection>
        </SkillContainer>
      </Section3>

      <Section4 id="section4">
        <Typography variant="h2">Proyectos</Typography>
        <ProjectsContainer>
          <div>
            <Project title="Bank Dash" image="/projects/home.jpeg" />
          </div>

          <Modal />
        </ProjectsContainer>
      </Section4>

      <Section5 id="section5">contacto</Section5>
    </Layout>
  );
};

export default App;
