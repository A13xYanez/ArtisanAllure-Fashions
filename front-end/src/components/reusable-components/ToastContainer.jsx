import React from 'react';
import Toast from './Toast';
import { useToastStateContext } from './ToastContext';

export default function ToastContainer() {
  const { toasts } = useToastStateContext();
  
  return (
    <div className="toast-container">
      <div className="toast-lists">
        {toasts &&
          toasts.map((toast) => (
            <Toast
              id={toast.id}
              key={toast.id}
              type={toast.type}
              message={toast.message}
            />
          ))}
      </div>
    </div>
  );
}