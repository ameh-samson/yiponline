import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [cardStates, setCardStates] = useState({});

  // menu navigation
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // career card details
  const toggleDetails = (id) => {
    setCardStates((prevStates) => ({
      ...prevStates,
      [id]: {
        detailsVisible: !prevStates[id]?.detailsVisible,
      },
    }));
  };

  // context values
  const contextValues = {
    isMenuOpen,
    toggleMenu,
    handleLinkClick,
    cardStates,
    toggleDetails,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
