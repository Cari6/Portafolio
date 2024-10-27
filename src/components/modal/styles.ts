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
  background-color: red;
  position: relative;
  width: 100%;
  max-width: 1300px;
  border-radius: 9px;
  cursor: default;
`;
