import Header from "../header";
import { ContentContainer, HeaderContainer } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ContentContainer>{children}</ContentContainer>
    </>
  );
};

export default Layout;
