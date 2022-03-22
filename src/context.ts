import { createContext, useContext } from 'react';

export type ApplicationContext = {
  loggedIn: boolean;
  setLoggedIn: (v: boolean) => void;
};

export const AppCtx = createContext<ApplicationContext>({
  loggedIn: false,
  setLoggedIn: () => {}
});

export const useAppCtx = () => useContext(AppCtx);
