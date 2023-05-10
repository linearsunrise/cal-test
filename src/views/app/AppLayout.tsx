import './AppLayout.scss';
import NavBar from '@/components/app/layout/NavBar';
import ContentView from '@/components/app/layout/ContentView';
import { Link, Outlet } from 'react-router-dom';
import React from 'react';
import SimpleCalendar from '@/components/app/layout/SimpleCalendar';

export default function AppLayout() {
  return (
    <React.StrictMode>
      <div className="app-layout">
        <NavBar>
          <Link to="/week" className="app-layout__navigation-list-element">
            Week
          </Link>
          <Link to="/month" className="app-layout__navigation-list-element">
            Month
          </Link>
          <Link to="/day" className="app-layout__navigation-list-element">
            Day
          </Link>
          <Link to="/agenda" className="app-layout__navigation-list-element">
            Agenda
          </Link>
          <SimpleCalendar date={{day: 4, month: 4, year: 2023}}></SimpleCalendar>
        </NavBar>
        <ContentView>
          <Outlet></Outlet>
        </ContentView>
      </div>
    </React.StrictMode>
  );
}
