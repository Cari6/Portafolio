import { useEffect, useState } from "react";
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
  ContactContainer,
  LinkIcon,
} from "./styles";
import { LenguageSkills, OtherSkills, ToolSkills } from "./utils/skills";
import useTooltip from "./hooks/useTooltip";
import { projectsData } from "./utils/projects";

const App = () => {
  const [copied, setCopied] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{
    images: string[];
    title: string;
    description: string;
    languageIcons: string[];
    links?: { url: string; icon: string }[];
  } | null>(null);
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

  const handleCopyClick = () => {
    copyToClipBoard();
  };

  const openModal = (project: typeof selectedProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isModalOpen]);

  return (
    <Layout>
      <Section1 id="section1">
        <Photo>
          <img src="perfil222.png" alt="" />
        </Photo>
        <HomeText>
          <Typography variant="h1" style={{ textAlign: "center" }}>
            Carolina Sandoval
          </Typography>
          <Typography variant="title1" style={{ textAlign: "center" }}>
            Frontend Web Developer{" "}
          </Typography>
          <EmailContainer>
            <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            <CopyButton
              onClick={handleCopyClick}
              onMouseEnter={() => showTooltip("copy-button")}
              onMouseLeave={() => hideTooltip("copy-button")}
            >
              <img src="/copy-icon.svg" alt="" />
              <CopiedText>{copiedText}</CopiedText>
              <Tooltip
                text="Copiar"
                $visible={isTooltipVisible["copy-button"]}
              />
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
              maxWidth: "1000px",
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
            {/* También me gustan los gatos, los libros y la música de BTS 💜. */}
          </Typography>
          {/* <div
            style={{ backgroundColor: "blue", width: 200, height: 200 }}
          ></div> */}
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
          {projectsData.map((project, index) => (
            <div key={index} onClick={() => openModal(project)}>
              <Project title={project.title} image={project.images[0]} />
            </div>
          ))}
          {isModalOpen && selectedProject && (
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              project={selectedProject}
            />
          )}
        </ProjectsContainer>
      </Section4>

      <Section5 id="section5">
        <Typography variant="h2">Contacto</Typography>
        <ContactContainer>
          <EmailContainer>
            <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            <CopyButton
              onClick={handleCopyClick}
              onMouseEnter={() => showTooltip("copy-button")}
              onMouseLeave={() => hideTooltip("copy-button")}
            >
              <img src="/copy-icon.svg" alt="" />
              <CopiedText>{copiedText}</CopiedText>
              <Tooltip
                text="Copiar"
                $visible={isTooltipVisible["copy-button"]}
              />
            </CopyButton>
          </EmailContainer>
          <div style={{ display: "flex", gap: "20px" }}>
            {[
              {
                href: "https://www.linkedin.com/in/carolina-sandoval-678656333/",
                src: "/skills/linkedin.png",
                alt: "LinkedIn",
                id: "linkedin",
              },
              {
                href: "https://github.com/Cari6",
                src: "/skills/github.png",
                alt: "GitHub",
                id: "github",
              },
              {
                href: "https://github.com/Cari6/Curriculum-Vitae",
                src: "/doc.svg",
                alt: "CV",
                id: "cv",
              },
            ].map(({ href, src, alt, id }) => (
              <div key={id} style={{ position: "relative" }}>
                <LinkIcon
                  href={href}
                  target="_blank"
                  onMouseEnter={() => showTooltip(id)}
                  onMouseLeave={() => hideTooltip(id)}
                >
                  <img src={src} alt={alt} width={25} height={25} />
                </LinkIcon>
                <Tooltip text={`Ir a ${alt}`} $visible={isTooltipVisible[id]} />
              </div>
            ))}
          </div>
        </ContactContainer>
      </Section5>
    </Layout>
  );
};

export default App;
