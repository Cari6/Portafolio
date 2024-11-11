import {
  EmailContainer,
  EmailLink,
  HomeText,
  PhotoContainer,
  SectionContainer,
} from "./styles";
import Typography from "../typography";
import { email } from "../../utils/constants/constants";
import CopyButton from "../copy-button";

interface HomeSectionProps {
  id: string;
}

const HomeSection = ({ id }: HomeSectionProps) => {
  return (
    <SectionContainer id={id}>
      <PhotoContainer>
        <img src="profile-photo.png" alt="" />
      </PhotoContainer>
      <HomeText>
        <Typography variant="h1" className="name">
          Carolina Sandoval
        </Typography>
        <Typography variant="title1" className="job-title">
          Frontend Web Developer
        </Typography>
        <EmailContainer>
          <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
          <CopyButton textToCopy={email} copiedText="¡Correo copiado!" />
        </EmailContainer>
      </HomeText>
    </SectionContainer>
  );
};

export default HomeSection;
