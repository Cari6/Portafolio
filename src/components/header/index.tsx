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
import { navItems } from "../../utils/constants/constants";

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
          {navItems.map((item, index) => (
            <Item key={index} onClick={() => scrollToSection(item.sectionId)}>
              {item.label}
            </Item>
          ))}
        </Nav>
      </HeaderContainer>

      <SidebarContainer $isOpen={isSidebarOpen}>
        {isSidebarOpen && <Overlay onClick={CloseSidebar} />}

        <SidebarNav>
          {navItems.map((item, index) => (
            <SidebarItem
              onClick={() => {
                scrollToSection(item.sectionId);
                CloseSidebar();
              }}
            >
              {item.label}
            </SidebarItem>
          ))}
        </SidebarNav>
      </SidebarContainer>
    </>
  );
};

export default Header;
