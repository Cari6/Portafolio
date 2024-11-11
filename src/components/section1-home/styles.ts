import styled from "styled-components";
import Typography from "../typography";

export const SectionContainer = styled.div`
  height: 640px;
  background-color: #16161d;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 880px) {
    flex-direction: column;
  }
`;

export const HomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 403px;

  @media (max-width: 450px) {
    width: 100%;
  }

  .name {
    text-align: center;
  }

  .job-title {
    text-align: center;
  }
`;

export const PhotoContainer = styled.div`
  width: 200px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const EmailLink = styled.a`
  text-decoration: none;
  background-color: #2a2a38;
  padding: 15px 5px;
  border-radius: 9px;
  color: #fff;
  width: 100%;

  &:hover {
    color: #ccb86c;
  }
`;
