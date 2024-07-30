import React from 'react';
import BundleAllPages from './BundleAllPages';
import ToastProvider from './components/reusable-components/ToastContext';
import ToastContainer from './components/reusable-components/ToastContainer';
import './App.css';

export default function App() {
  return (
    <>
      <ToastProvider>
        <BundleAllPages />
        <ToastContainer />
      </ToastProvider>
    </>
  )
};
