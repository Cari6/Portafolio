import { useState } from "react";
import Typography from "../typography";
import {
  CarouselButton,
  CarouselContainer,
  CarouselControls,
  CarouselImage,
  CloseButton,
  Container,
  LanguageIcon,
  LanguageIconContainer,
  LinkIcon,
  LinkIconContainer,
  ModalOverlay,
  ProjectInfo,
} from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    images: string[];
    title: string;
    description: string;
    languageIcons: string[];
    links?: { url: string; icon: string }[];
  };
}

const Modal = ({ isOpen, onClose, project }: ModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <img src="close.svg" alt="" />
        </CloseButton>
        <CarouselContainer>
          <CarouselImage
            src={project.images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />

          {project.images.length > 1 && (
            <CarouselControls>
              <CarouselButton
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                <img src="/arrow-back.svg" alt="" />
              </CarouselButton>
              <CarouselButton
                onClick={handleNext}
                disabled={currentIndex === project.images.length - 1}
              >
                <img src="/arrow-next.svg" alt="" />
              </CarouselButton>
            </CarouselControls>
          )}
        </CarouselContainer>

        <ProjectInfo>
          <Typography variant="title1" style={{ color: "#000" }}>
            {project.title}
          </Typography>

          <LanguageIconContainer>
            {project.languageIcons.map((icon, index) => (
              <LanguageIcon key={index}>
                <img src={icon} alt="" width={25} height={25} />
              </LanguageIcon>
            ))}
          </LanguageIconContainer>

          <Typography variant="description" style={{ color: "#2a2a38" }}>
            {project.description}
          </Typography>

          <LinkIconContainer>
            {project.links?.map((link, index) => (
              <LinkIcon key={index} href={link.url} target="_blank">
                <img src={link.icon} alt="" width={25} height={25} />
              </LinkIcon>
            ))}
          </LinkIconContainer>
        </ProjectInfo>
      </Container>
    </ModalOverlay>
  );
};

export default Modal;
