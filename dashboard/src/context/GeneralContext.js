import { createContext } from "react";

export const GeneralContext = createContext(null);

export const GeneralContextProvider = ({ children }) => {
  return (
    <GeneralContext.Provider value={null}>
      {children}
    </GeneralContext.Provider>
  );
};
