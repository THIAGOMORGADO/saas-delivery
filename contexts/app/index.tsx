import React, { createContext, useReducer } from 'react';
import { reducer } from './reduce'
import { ContextType, DataType, ProviderType } from './types';

export { useAppContext } from './hook'

const InitialState: DataType = {
  tenant: null,
}
export const AppContext = createContext<ContextType>({
  state: InitialState,
  dispatch: () => { }
});
export const Provider = ({children} : ProviderType) => {
    const [state, dispatch] = useReducer(reducer, InitialState)

    const value = {state, dispatch}
    return(
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );
} 