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
import { headerHeight, navItems } from "../../utils/constants/constants";
import useToggle from "../../hooks/useToggle";

const Header = () => {
  const { isSidebarOpen, OpenSidebar, CloseSidebar } = useToggle();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
      });
    }
  };

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
              key={index}
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
