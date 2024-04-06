import { Tenant } from '@/types/Tenant'

import { ReactNode, createContext, useContext, useState } from 'react';

type appContextType = {
  tenant: Tenant | null;
  setTenant: (newTenant: Tenant) => void;
}

const defaultValues: appContextType = {
  tenant: null,
  setTenant: () => null
}

const appContext = createContext<appContextType>(defaultValues);

// craindo um hook para o contexto
export const useAppContext = () => {
  return useContext(appContext);
}

type Props =  {
  children: ReactNode
}

export const AppContextProvider = ({children}: Props) => {
  const [tenant, setTenant] = useState<Tenant | null>(null)

  return(
    <appContext.Provider value={{tenant, setTenant}}>
      {children}
    </appContext.Provider>
  )
}