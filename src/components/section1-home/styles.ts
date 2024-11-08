import styled from "styled-components";

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
`;
export const Photo = styled.div`
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

export const CopyButton = styled.button`
  background-color: #2a2a38;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  position: relative;
`;

export const CopiedText = styled.span`
  color: #ccb86c;
  font-family: "montserrat";
`;
