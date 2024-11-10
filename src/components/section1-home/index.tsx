import { useEffect, useState } from "react";
import {
  CopiedText,
  CopyButton,
  EmailContainer,
  EmailLink,
  HomeText,
  Photo,
  SectionContainer,
} from "./styles";
import Typography from "../typography";
import Tooltip from "../tooltip";
import useTooltip from "../../hooks/useTooltip";
import { email } from "../../utils/constants/constants";

interface HomeSectionProps {
  id: string;
}

const HomeSection = ({ id }: HomeSectionProps) => {
  const [copied, setCopied] = useState(false);
  const [isTooltipEnabled, setIsTooltipEnabled] = useState(true);
  const { isTooltipVisible, showTooltip, hideTooltip } = useTooltip();
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleCopyClick = () => {
    copyToClipBoard();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsTooltipEnabled(window.innerWidth >= 450);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <SectionContainer id={id}>
      <Photo>
        <img src="profile-photo.png" alt="" />
      </Photo>
      <HomeText>
        <Typography variant="h1">Carolina Sandoval</Typography>
        <Typography variant="title1">Frontend Web Developer </Typography>
        <EmailContainer>
          <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
          <CopyButton
            onClick={handleCopyClick}
            onMouseEnter={() => isTooltipEnabled && showTooltip("copy-button")}
            onMouseLeave={() => isTooltipEnabled && hideTooltip("copy-button")}
          >
            <img src="/copy-icon.svg" alt="" />
            {copied && <CopiedText>¡Correo copiado!</CopiedText>}
            <Tooltip text="Copiar" $visible={isTooltipVisible["copy-button"]} />
          </CopyButton>
        </EmailContainer>
      </HomeText>
    </SectionContainer>
  );
};

export default HomeSection;
