import styled from "styled-components";

export const Container = styled.div`
  background-color: #16161d;
  width: 350px;
  height: 200px;
  border-radius: 9px;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
    transition: 0.3s;
  }
`;

export const Image = styled.div`
  height: 160px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 9px 9px 0 0;
  }
`;
export const Title = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;
