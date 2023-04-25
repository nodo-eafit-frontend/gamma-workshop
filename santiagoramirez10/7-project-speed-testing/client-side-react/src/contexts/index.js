import { createContext, useContext } from "react";

export const Context = createContext();

const results = {
  score: 1000,
  time: 5,
};

export const Provider = ({ children }) => {
  return <Context.Provider value={results}>{children}</Context.Provider>;
};

export const useContextGeneric = () => {
  return useContext(Context);
};
