import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  padding: 40px;
  cursor: pointer;
`;

export const Container = styled.div`
  background-color: #fff;
  position: relative;
  width: 100%;
  max-width: 1300px;
  border-radius: 9px;
  cursor: default;
  display: flex;
  overflow-y: auto;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const CarouselContainer = styled.div`
  background-color: #2a2a38;
  flex: 2;
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: cover;
`;

export const CarouselControls = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-between;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 10px;

  button {
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 4px;
  }
`;

export const CarouselButton = styled.div``;

export const ProjectInfo = styled.div`
  flex: 1;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;
export const LenguageIconContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
export const LenguageIcon = styled.div`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`;

export const LinkIcon = styled.a`
  // border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #e3e3e3;
  }
`;
