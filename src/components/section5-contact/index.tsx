import {
  ContactContainer,
  ContactLinks,
  EmailContainer,
  EmailLink,
  LinkIcon,
  LinkIconContainer,
  Section5,
} from "./styles";
import Typography from "../typography";
import Tooltip from "../tooltip";
import useTooltip from "../../hooks/useTooltip";
import { contactInfo, email } from "../../utils/constants/constants";
import CopyButton from "../copy-button";

interface ContactSectionProps {
  id: string;
}

const ContactSection = ({ id }: ContactSectionProps) => {
  const { isTooltipEnabled, isTooltipVisible, showTooltip, hideTooltip } =
    useTooltip();

  return (
    <Section5 id={id}>
      <Typography variant="h2">Contacto</Typography>
      <ContactContainer>
        <EmailContainer>
          <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
          <CopyButton textToCopy={email} copiedText="¡Correo copiado!" />
        </EmailContainer>
        <ContactLinks>
          {contactInfo.map(({ href, src, alt, id }) => (
            <LinkIconContainer key={id}>
              <LinkIcon
                href={href}
                target="_blank"
                onMouseEnter={() => isTooltipEnabled && showTooltip(id)}
                onMouseLeave={() => isTooltipEnabled && hideTooltip(id)}
              >
                <img src={src} alt={alt} width={25} height={25} />
              </LinkIcon>
              <Tooltip text={`Ir a ${alt}`} $visible={isTooltipVisible[id]} />
            </LinkIconContainer>
          ))}
        </ContactLinks>
      </ContactContainer>
    </Section5>
  );
};

export default ContactSection;
