import React, { createContext, useReducer } from 'react';
import { reducer } from './reduce'
import { ContextType, DataType, ProviderType } from './types';

export { useAuthContext } from './hook'

const InitialState: DataType = {
  token: '',
  user: null,
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