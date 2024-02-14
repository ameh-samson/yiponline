import { createContext, useContext } from "react";
import { useInView } from "react-intersection-observer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // for transition
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const contextValues = { ref, inView };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
