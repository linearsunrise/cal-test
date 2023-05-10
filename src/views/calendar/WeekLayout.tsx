import React from 'react';
import WeekDay from './WeekDay';
import './WeekLayout.scss';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

export default function WeekLayout() {
  const { year, week } = useParams();
  const date = dayjs(new Date())
    .set('year', +(year || 0))
    .week(+(week || 0) + 1)
    .startOf('day') 
    .startOf('week')
    .day(1);
  return (
    <React.StrictMode>
      <div className="week-layout">
        {Array.from({ length: 7 }).map((item, idx) => (
          <WeekDay
            date={date.add(idx, 'day').toDate()}
            key={idx}
          ></WeekDay>
        ))}
      </div>
    </React.StrictMode>
  );
}
