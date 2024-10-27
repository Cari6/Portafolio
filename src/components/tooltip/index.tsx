import Typography from "../typography";
import { TooltipContainer } from "./styles";

export interface TooltipProps {
  text: string;
  $visible?: boolean;
  $backgroundColor?: string;
  $bottom?: string;
}

const Tooltip = ({
  text,
  $visible = false,
  $backgroundColor,
  $bottom,
}: TooltipProps) => {
  return (
    <TooltipContainer
      $visible={$visible}
      $backgroundColor={$backgroundColor}
      $bottom={$bottom}
    >
      <Typography variant="description">{text}</Typography>
    </TooltipContainer>
  );
};

export default Tooltip;
