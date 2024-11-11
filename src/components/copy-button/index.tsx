import { useState } from "react";
import { Container, CopiedText } from "./styles";
import Tooltip from "../tooltip";
import useTooltip from "../../hooks/useTooltip";

interface CopyButtonProps {
  textToCopy: string;
  copiedText: string;
}

const CopyButton = ({ textToCopy, copiedText }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const { isTooltipVisible, showTooltip, hideTooltip, isTooltipEnabled } =
    useTooltip();

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleCopyClick = () => {
    copyToClipBoard();
  };

  return (
    <Container
      onClick={handleCopyClick}
      onMouseEnter={() => isTooltipEnabled && showTooltip("copy-button")}
      onMouseLeave={() => isTooltipEnabled && hideTooltip("copy-button")}
    >
      <img src="/copy-icon.svg" alt="Copy Icon" />
      {copied && <CopiedText>{copiedText}</CopiedText>}
      <Tooltip text="Copiar" $visible={isTooltipVisible["copy-button"]} />
    </Container>
  );
};

export default CopyButton;
