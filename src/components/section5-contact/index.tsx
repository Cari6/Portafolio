import { useEffect, useState } from "react";
import {
  ContactContainer,
  CopiedText,
  CopyButton,
  EmailContainer,
  EmailLink,
  LinkIcon,
  Section5,
} from "./styles";
import Typography from "../typography";
import Tooltip from "../tooltip";
import useTooltip from "../../hooks/useTooltip";
import { contactInfo, email } from "../../utils/constants/constants";

interface ContactSectionProps {
  id: string;
}

const ContactSection = ({ id }: ContactSectionProps) => {
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
    <Section5 id={id}>
      <Typography variant="h2">Contacto</Typography>
      <ContactContainer>
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
        <div style={{ display: "flex", gap: "20px" }}>
          {contactInfo.map(({ href, src, alt, id }) => (
            <div key={id} style={{ position: "relative" }}>
              <LinkIcon
                href={href}
                target="_blank"
                onMouseEnter={() => isTooltipEnabled && showTooltip(id)}
                onMouseLeave={() => isTooltipEnabled && hideTooltip(id)}
              >
                <img src={src} alt={alt} width={25} height={25} />
              </LinkIcon>
              <Tooltip text={`Ir a ${alt}`} $visible={isTooltipVisible[id]} />
            </div>
          ))}
        </div>
      </ContactContainer>
    </Section5>
  );
};

export default ContactSection;
