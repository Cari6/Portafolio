import { useEffect, useState } from "react";
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

  const headerHeight = 71;

  const OpenSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const CloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
      });
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isSidebarOpen]);

  return (
    <>
      <HeaderContainer>
        <MenuIcon onClick={OpenSidebar}>
          <img src="/menu-icon.svg" alt="" width={25} height={25} />
        </MenuIcon>
        <Nav>
          <Item onClick={() => scrollToSection("section1")}>Inicio</Item>
          <Item onClick={() => scrollToSection("section2")}>Sobre Mí</Item>
          <Item onClick={() => scrollToSection("section3")}>Conocimientos</Item>
          <Item onClick={() => scrollToSection("section4")}>Proyectos</Item>
          <Item onClick={() => scrollToSection("section5")}>Contacto</Item>
        </Nav>
      </HeaderContainer>

      <SidebarContainer $isOpen={isSidebarOpen}>
        {isSidebarOpen && <Overlay onClick={CloseSidebar} />}

        <SidebarNav>
          <SidebarItem
            onClick={() => {
              scrollToSection("section1");
              CloseSidebar();
            }}
          >
            Inicio
          </SidebarItem>
          <SidebarItem
            onClick={() => {
              scrollToSection("section2");
              CloseSidebar();
            }}
          >
            Sobre Mí
          </SidebarItem>
          <SidebarItem
            onClick={() => {
              scrollToSection("section3");
              CloseSidebar();
            }}
          >
            Conocimientos
          </SidebarItem>
          <SidebarItem
            onClick={() => {
              scrollToSection("section4");
              CloseSidebar();
            }}
          >
            Proyecto
          </SidebarItem>
          <SidebarItem
            onClick={() => {
              scrollToSection("section5");
              CloseSidebar();
            }}
          >
            Contacto
          </SidebarItem>
        </SidebarNav>
      </SidebarContainer>
    </>
  );
};

export default Header;
