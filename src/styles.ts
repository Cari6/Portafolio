import styled from "styled-components";

export const Section1 = styled.div`
  height: 600px;
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
`;
export const Photo = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;

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
`;

export const EmailLink = styled.a`
  text-decoration: none;
  background-color: #2a2a38;
  padding: 15px;
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

export const Section2 = styled.div`
  height: 100%;
  background-color: #2a2a38;
  display: flex;
  align-items: center;
  padding: 40px;
  gap: 20px;

  @media (max-width: 880px) {
    flex-direction: column;
  }
`;

export const AboutMeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const Section3 = styled.div`
  height: 600px;
`;
export const Section4 = styled.div`
  height: 600px;
  background-color: #2a2a38;
`;
export const Section5 = styled.div`
  height: 600px;
`;
