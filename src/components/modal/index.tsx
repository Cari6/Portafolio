import { useState } from "react";
import Typography from "../typography";
import {
  CarouselButton,
  CarouselContainer,
  CarouselControls,
  CarouselImage,
  Container,
  LenguageIcon,
  LenguageIconContainer,
  LinkIcon,
  ModalOverlay,
  ProjectInfo,
} from "./styles";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

const images = [
  "/home.jpeg",
  "/transactions.jpeg",
  "/credit-cards.jpeg",
  "/setting.jpeg",
];

const Modal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  //   if (!isOpen) return null;

  return (
    <ModalOverlay>
      <Container>
        <CarouselContainer>
          <CarouselImage
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
          <CarouselControls>
            <button onClick={handlePrev}>prev</button>
            <button onClick={handleNext}>next</button>
          </CarouselControls>
        </CarouselContainer>

        <ProjectInfo>
          <Typography variant="title1" style={{ color: "#000" }}>
            Bank Dash
          </Typography>

          <LenguageIconContainer>
            <LenguageIcon>
              <img src="/skills/html.png" alt="" width={25} height={25} />
            </LenguageIcon>
          </LenguageIconContainer>

          <Typography variant="description" style={{ color: "#2a2a38" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            dolorum saepe voluptas eveniet pariatur, temporibus facilis, magnam,
            sed provident quam vel quasi nobis suscipit explicabo! Accusantium,
            magnam. Sapiente, culpa? Atque.
          </Typography>

          <LinkIcon
            href="https://github.com/Cari6/Bank-Dash-Project"
            target="_blank"
          >
            <img src="/skills/github.png" alt="" width={25} height={25} />
          </LinkIcon>
        </ProjectInfo>
      </Container>
    </ModalOverlay>
  );
};

export default Modal;
