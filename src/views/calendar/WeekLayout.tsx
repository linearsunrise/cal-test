import React from 'react';
import WeekDay from './WeekDay';
import './WeekLayout.scss';

export default function WeekLayout() {
  return (
    <React.StrictMode>
      <div className="week-layout">
        {Array.from({ length: 7 }).map((item, idx) => (
          <WeekDay day={idx + 1} key={idx}></WeekDay>
        ))}
      </div>
    </React.StrictMode>
  );
}
