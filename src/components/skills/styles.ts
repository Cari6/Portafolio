import styled from "styled-components";
import Typography from "../typography";

export const SkillsContainer = styled.div`
  background-color: #2a2a38;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 50%;
  width: 115px;
  height: 115px;
`;

export const IconContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  width: 40px;
  height: 40px;
`;

export const StyledTypography = styled(Typography)`
  text-align: center;

  &.default {
    color: #fff;
  }

  &.alternative {
    color: #ccb86c;
  }
`;
