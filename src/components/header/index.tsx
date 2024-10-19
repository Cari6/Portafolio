import { useState } from "react";
import {
  HeaderContainer,
  Item,
  MenuIcon,
  Nav,
  Overlay,
  SidebarContainer,
  SidebarItem,
  SidebarNav,
} from "./styles";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const OpenSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const CloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <MenuIcon onClick={OpenSidebar}>
          <img src="/menu-icon.svg" alt="" />
        </MenuIcon>
        <Nav>
          <Item href="#section1">Inicio</Item>
          <Item href="#section2">Sobre Mí</Item>
          <Item href="#section3">Conocimientos</Item>
          <Item href="#section4">Proyectos</Item>
          <Item href="#section5">Contacto</Item>
        </Nav>
      </HeaderContainer>

      <SidebarContainer $isOpen={isSidebarOpen}>
        {isSidebarOpen && <Overlay onClick={CloseSidebar} />}

        <SidebarNav>
          <SidebarItem href="#section1" onClick={CloseSidebar}>
            Inicio
          </SidebarItem>
          <SidebarItem href="#section2" onClick={CloseSidebar}>
            Sobre Mí
          </SidebarItem>
          <SidebarItem href="#section3" onClick={CloseSidebar}>
            Conocimientos
          </SidebarItem>
          <SidebarItem href="#section4" onClick={CloseSidebar}>
            Proyecto
          </SidebarItem>
          <SidebarItem href="#section5" onClick={CloseSidebar}>
            Contacto
          </SidebarItem>
        </SidebarNav>
      </SidebarContainer>
    </>
  );
};

export default Header;
