import AppLayout from '@/views/app/AppLayout';
import WeekLayout from '@/views/calendar/WeekLayout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import React from 'react';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="week" element={<WeekLayout />}></Route>
    </Route>
  )
);
