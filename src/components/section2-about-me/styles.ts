import styled from "styled-components";
import Typography from "../typography";

export const SectionContainer = styled.div`
  height: 100%;
  min-height: 640px;
  background-color: #2a2a38;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px;
  gap: 40px;
`;

export const AboutMeText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-grow: 1;
  @media (max-width: 880px) {
    flex-direction: column;
  }
  .text {
    line-height: 1.8;
    max-width: 1000px;
    text-align: center;
  }
`;
