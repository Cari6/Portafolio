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

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b1b1b1;
    border-radius: 0 9px 9px 0;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #9c9c9c;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #fff;
  border: none;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  border-radius: 50%;
  padding: 6px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #e3e3e3;
    transition: 0.3s;
  }
`;

export const CarouselContainer = styled.div`
  background-color: #2a2a38;
  flex: 2;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CarouselControls = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-between;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 8px;
`;

export const CarouselButton = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #e3e3e3;
    transition: 0.3s;
  }

  &:disabled {
    opacity: 0.5;
    cursor: none;
  }
`;

export const ProjectInfo = styled.div`
  flex: 1;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;
export const LanguageIconContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
export const LanguageIcon = styled.div`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`;

export const LinkIcon = styled.a`
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
    transition: 0.3s;
  }
`;
