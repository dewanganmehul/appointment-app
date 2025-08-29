import { createContext } from "react";
import { doctors } from "../assets/assets (2)";

// Create Context with optional default value
export const AppContext = createContext({
  doctors: [],
});

const AppContextProvider = ({ children }) => {
  const value = {
    doctors,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
