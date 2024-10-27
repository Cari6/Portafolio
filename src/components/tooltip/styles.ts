import styled from "styled-components";

interface TooltipContainerProps {
  $visible?: boolean;
  $backgroundColor?: string;
  $bottom?: string;
  $left?: string;
}

export const TooltipContainer = styled.div<TooltipContainerProps>`
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
  background-color: ${(props) => props.$backgroundColor || "#2a2a38"};
  color: #fff;
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  position: absolute;
  bottom: ${(props) => props.$bottom || "-80%"};
  left: 50%;
  transform: translateX(-50%);
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;
