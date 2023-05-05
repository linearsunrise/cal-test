import {RouterProvider} from 'react-router-dom'; 
import { router } from './router';
import React from 'react';

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={ router } />
    </React.StrictMode>
  );
}
