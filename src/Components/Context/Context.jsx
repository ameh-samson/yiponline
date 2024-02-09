import { createContext, useContext } from "react";

// Create the context
const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
  // Provide the context values to the children components
  const contextValues = {};
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
