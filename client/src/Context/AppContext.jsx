import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  // Store component states in an object: { [componentName]: state }
  const [componentStates, setComponentStates] = useState({});
  const [fixSubscribe, setFixSubscribe] = useState();
  const [showPromo, setShowPromo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowPromo(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to update a component's state
  const setComponentState = (componentName, state) => {
    setComponentStates((prev) => ({
      ...prev,
      [componentName]: state,
    }));
  };

  // useEffect(() => {

  // }, [third])

  // Function to get a component's state
  const getComponentState = (componentName) => {
    return componentStates[componentName];
  };

  return (
    <AppContext.Provider
      value={{
        componentStates,
        setComponentState,
        getComponentState,
        setShowPromo,
        showPromo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for easier usage
export const useAppContext = () => useContext(AppContext);
