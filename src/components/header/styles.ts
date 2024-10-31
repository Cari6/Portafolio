import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #16161d;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 20px;

  @media (max-width: 620px) {
    justify-content: flex-start;
  }

  @media (max-width: 620px) {
    height: 71px;
  }
`;

export const MenuIcon = styled.button`
  background-color: transparent;
  display: flex;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 7px;

  &:hover {
    background-color: #2a2a38;
    transition: 0.3s;
  }
  @media (min-width: 621px) {
    display: none;
  }
`;
export const Nav = styled.nav`
  display: flex;

  @media (max-width: 620px) {
    display: none;
  }
`;

export const Item = styled.div`
  color: #9a9acb;
  font-weight: 500;
  padding: 15px;
  cursor: pointer;

  &:hover {
    background-color: #2a2a38;
    transition: 0.3s;
    border-radius: 7px;
  }
`;

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.$isOpen ? "0" : "-250px")};
  transition: left 0.3s ease-in-out;
  z-index: 1002;
`;
export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
`;
export const SidebarNav = styled.nav`
  background-color: #16161d;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  border-right: 2px solid #2a2a38;
  width: 250px;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1000;
`;
export const SidebarItem = styled.div`
  color: #9a9acb;
  font-weight: 500;
  padding: 15px;
  cursor: pointer;

  &:hover {
    background-color: #2a2a38;
    transition: 0.3s;
  }
`;
