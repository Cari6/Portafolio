import { useEffect, useState } from "react";

interface TooltipVisibility {
  [key: string]: boolean;
}

const useTooltip = () => {
  const [isTooltipVisible, setTooltipVisible] = useState<TooltipVisibility>({});
  const [isTooltipEnabled, setIsTooltipEnabled] = useState(
    window.innerWidth >= 450
  );

  const showTooltip = (id: string) => {
    setTooltipVisible((prev) => ({ ...prev, [id]: true }));
  };

  const hideTooltip = (id: string) => {
    setTooltipVisible((prev) => ({ ...prev, [id]: false }));
  };

  const handleResize = () => {
    setIsTooltipEnabled(window.innerWidth >= 450);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isTooltipVisible,
    showTooltip,
    hideTooltip,
    isTooltipEnabled,
  };
};

export default useTooltip;
