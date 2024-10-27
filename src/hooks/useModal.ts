import { useCallback, useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    console.log("abriendo modal");
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    console.log("cerrando modal");
    setIsOpen(false);
  }, []);
  return { isOpen, openModal, closeModal };
};

export default useModal;
