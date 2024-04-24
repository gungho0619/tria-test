import React, { createContext, useState, useContext, useEffect } from 'react';
import { localStorageGet, localStorageSet } from '../utils/localStorage';

interface StoreContextProps {
  page: number;
  setPage: (value: number) => void;
}

interface propsType {
  children: React.ReactNode;
}

const StoreContext = createContext<StoreContextProps | null>(null);

const StoreProvider = (props: propsType) => {
  const [page, setPage] = useState<number>(localStorageGet('page'));

  const loadPage = () => {
    setPage(localStorageGet('page') === '' ? 0 : localStorageGet('page'));
  };

  const setPageNumber = (num: number) => {
    setPage(num);
    localStorageSet('page', num);
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        page,
        setPage: setPageNumber
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("can't find context");
  }
  return context;
};
