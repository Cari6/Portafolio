import styled from "styled-components";

export const Section1 = styled.div`
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

export const Section2 = styled.div`
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
`;

export const Section3 = styled.div`
  min-height: 640px;
  padding: 40px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const SkillSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Section4 = styled.div`
  min-height: 640px;
  background-color: #2a2a38;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px;
  gap: 20px;
`;

export const ProjectsContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
`;
export const Section5 = styled.div`
  min-height: 640px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px;
  gap: 20px;
`;

export const ContactContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 40px;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const LinkIcon = styled.a`
  position: relative;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  &:hover {
    background-color: #bdbdbd;
    transition: 0.3s;
  }
`;
