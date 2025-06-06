import React from 'react';
import { createContext, useContext, useReducer } from 'react';

const ToastStateContext = createContext({ toasts: [] });
const ToastDispatchContext = createContext(null);

function ToastReducer(state, action) {
  switch (action.type) {
    case 'ADD_TOAST': {
      return {
        ...state,
        toasts: [...state.toasts, action.toast],
      };
    }
    case 'DELETE_TOAST': {
      const updatedToasts = state.toasts.filter((e) => e.id != action.id);
      return {
        ...state,
        toasts: updatedToasts,
      };
    }
    default: {
      throw new Error('unhandled action type');
    }
  }
}

export default function ToastProvider({ children }) {
  const [state, dispatch] = useReducer(ToastReducer, {
    toasts: [],
  });
  return (
    <ToastStateContext.Provider value={state}>
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  );
}

export const useToastDispatchContext = () => useContext(ToastDispatchContext);
export const useToastStateContext = () => useContext(ToastStateContext);