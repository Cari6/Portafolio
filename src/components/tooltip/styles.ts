import styled from "styled-components";

export const TooltipContainer = styled.div<{ $visible: boolean }>`
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
  background-color: #2a2a38;
  color: #fff;
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  position: absolute;
  bottom: -80%;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;
