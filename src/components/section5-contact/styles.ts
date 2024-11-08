import styled from "styled-components";

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
