import Tooltip from "../tooltip";
import Typography from "../typography";
import { Container, Title, Image } from "./styles";
import useTooltip from "../../hooks/useTooltip";

interface ProjectProps {
  image: string;
  title: string;
}

const Project = ({ image, title }: ProjectProps) => {
  const { isTooltipVisible, showTooltip, hideTooltip } = useTooltip();

  const tooltipId = "project-tooltip";

  const handleMouseEnter = () => showTooltip(tooltipId);

  const handleMouseLeave = () => hideTooltip(tooltipId);
  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Image>
        <img src={image} width={300} height={180} alt="" />
      </Image>
      <Title>
        <Typography variant="description" style={{ color: "#fff" }}>
          {title}
        </Typography>
      </Title>
      <Tooltip
        text="Ver más"
        $visible={isTooltipVisible[tooltipId]}
        $backgroundColor="#16161d"
        $bottom="-20%"
      />
    </Container>
  );
};

export default Project;
