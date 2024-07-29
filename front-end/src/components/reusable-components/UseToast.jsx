import { useToastDispatchContext } from './ToastContext';

export function useToast() {
  const dispatch = useToastDispatchContext();

  function toast(type, message) {
    const id = Date.now();
    dispatch({ type: 'ADD_TOAST', toast: { type, message, id } });

    setTimeout(() => {
      dispatch({ type: 'DELETE_TOAST', id: id });
    }, 4000);
  }

  return toast;
}