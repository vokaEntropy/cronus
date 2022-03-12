import React, { createContext, useReducer, useContext } from 'react';

const initialStore = {
  settings: {
    timersIsImmediatelyStart: false,
  },
};

const StoreContext = createContext(initialStore);

function reducer(state: typeof initialStore, action: any) {
  switch (action.type) {
    case 'toggleTimersIsImmediatelyStart':
      return {
        settings: {
          timersIsImmediatelyStart: !state.settings.timersIsImmediatelyStart,
        },
      };
    default:
      throw new Error();
  }
}

const StoreProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, initialStore);

  return (
    <StoreContext.Provider value={{ store: state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export { StoreProvider, useStore };
