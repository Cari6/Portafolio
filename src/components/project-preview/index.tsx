import Tooltip from "../tooltip";
import Typography from "../typography";
import { Container, Title, Image } from "./styles";
import useTooltip from "../../hooks/useTooltip";
import useModal from "../../hooks/useModal";
import Modal from "../modal";

interface ProjectPreviewProps {
  image: string;
  title: string;
}

const ProjectPreview = ({ image, title }: ProjectPreviewProps) => {
  const { isTooltipVisible, showTooltip, hideTooltip } = useTooltip();
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <Container onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
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
        $visible={isTooltipVisible}
        $backgroundColor="#16161d"
        $bottom="-20%"
      />
    </Container>
  );
};

export default ProjectPreview;
