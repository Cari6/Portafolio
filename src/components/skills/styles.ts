import styled from "styled-components";
import { SkillsProps } from ".";

interface SkillsContainerProps {
  $variant: "default" | "alternative";
}

export const SkillsContainer = styled.div<SkillsContainerProps>`
  background-color: ${({ $variant }) =>
    $variant === "default" ? "#2a2a38" : "#CCB86C"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 50%;
  width: 115px;
  height: 115px;
`;

export const Icon = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  width: 40px;
  height: 40px;
`;
