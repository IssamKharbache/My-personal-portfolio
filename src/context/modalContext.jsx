import { createContext, useState } from "react";
export const modalContext = createContext(null);

const ModalContextProvider = (props) => {
  const [showModalcv, setShowModalcv] = useState(false);

  const contextValue = {
    showModalcv,
    setShowModalcv,
  };

  return (
    <modalContext.Provider value={contextValue}>
      {props.children}
    </modalContext.Provider>
  );
};

export default ModalContextProvider;
