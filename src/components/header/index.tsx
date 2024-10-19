import Typography from "../typography";
import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <ul>
        <Typography variant="title2">Inicio</Typography>
        <Typography variant="title2">Sobre Mí</Typography>
        <Typography variant="title2">Conocimientos</Typography>
        <Typography variant="title2">Proyectos</Typography>
        <Typography variant="title2">Contacto</Typography>
      </ul>
    </Container>
  );
};

export default Header;
