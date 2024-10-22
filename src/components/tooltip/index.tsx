import { TooltipContainer } from "./styles";

export interface TooltipProps {
  text: string;
  $visible?: boolean;
}

const Tooltip = ({ text, $visible = false }: TooltipProps) => {
  return <TooltipContainer $visible={$visible}>{text}</TooltipContainer>;
};

export default Tooltip;
