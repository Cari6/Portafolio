import { useEffect, useState } from "react";

const useToggle = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const OpenSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const CloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isSidebarOpen]);
  return { isSidebarOpen, OpenSidebar, CloseSidebar };
};

export default useToggle;
