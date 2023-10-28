import { createContext, useContext } from 'react';

export const stateContext = createContext({});
export const useStateContext = () => useContext(stateContext);