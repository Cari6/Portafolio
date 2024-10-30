import { useState } from "react";

interface TooltipVisibility {
  [key: string]: boolean;
}

const useTooltip = () => {
  const [isTooltipVisible, setTooltipVisible] = useState<TooltipVisibility>({});

  const showTooltip = (id: string) => {
    setTooltipVisible((prev) => ({ ...prev, [id]: true }));
  };

  const hideTooltip = (id: string) => {
    setTooltipVisible((prev) => ({ ...prev, [id]: false }));
  };

  return { isTooltipVisible, showTooltip, hideTooltip };
};

export default useTooltip;
