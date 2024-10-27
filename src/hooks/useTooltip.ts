import { useCallback, useState } from "react";

const useTooltip = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = useCallback(() => {
    setTooltipVisible(true);
  }, []);

  const hideTooltip = useCallback(() => {
    setTooltipVisible(false);
  }, []);

  return { isTooltipVisible, showTooltip, hideTooltip };
};

export default useTooltip;
