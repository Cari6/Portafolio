import Typography from "../typography";
import { AboutMeText, SectionContainer } from "./styles";

interface AboutMeSectionProps {
  id: string;
}

const AboutMeSection = ({ id }: AboutMeSectionProps) => {
  return (
    <SectionContainer id={id}>
      <Typography variant="h2">Sobre Mí</Typography>
      <AboutMeText>
        <Typography variant="description" className="text">
          Después de años trabajando en el área de salud, ventas y atención al
          público, descubrí mi pasión por la programación.
          <br />
          Soy Desarrolladora Frontend, tengo conocimientos en construcción de
          aplicaciones Web con ReactJs y NextJS.
          <br />
          Me considero una persona curiosa lo que me ha llevado a tener siempre
          un buen desempeño en mis trabajos, me gusta aprender y resolver
          problemas, soy comprometida y responsable con lo que hago.
          <br />
          Estoy ansiosa de unirme a un equipo de desarrollo donde pueda seguir
          aprendiendo, contribuir con soluciones técnicas mientras crezco como
          desarrolladora y ganar experiencia haciendo lo que me gusta. <br />
        </Typography>
      </AboutMeText>
    </SectionContainer>
  );
};

export default AboutMeSection;
