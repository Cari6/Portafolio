import { useCallback, useState } from "react";

const useTooltip = () => {
  const [isTooltipVisible, setTooltipVisible] = useState<{
    [key: string]: boolean;
  }>({});

  const showTooltip = useCallback((id: string) => {
    setTooltipVisible((prev) => ({ ...prev, [id]: true }));
  }, []);

  const hideTooltip = useCallback((id: string) => {
    setTooltipVisible((prev) => ({ ...prev, [id]: false }));
  }, []);

  return { isTooltipVisible, showTooltip, hideTooltip };
};

export default useTooltip;
