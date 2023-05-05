import Calendar from '@/components/lib/calendar/Calendar';
import React from 'react';
import './SimpleCalendar.scss';
import dayjs from 'dayjs';
import StyleUtils from '@/lib/style/StyleUtils';

export default function SimpleCalendar() {
  const calendar = new Calendar(1);
  const Month = new Date(2023, 4, 1);
  const Today = new Date();

  return (
    <React.StrictMode>
      <div className="simple-calendar">
        <div className="simple-calendar__month-title">
          {dayjs(Month).format('MMMM')}
        </div>
        <div className="simple-calendar__week">
          {calendar.weekDays().map((weekDay, idx) => (
            <div className="simple-calendar__calendar-day" key={idx}>
              {weekDay}
            </div>
          ))}
        </div>
        {calendar.monthDates(2023, 4).map((week, idx) => (
          <div className="simple-calendar__week" key={idx}>
            {week.map((date, jdx) => (
              <div className={StyleUtils.getStyleString([
                'simple-calendar__calendar-day',
                dayjs(date).isSame(Month, 'month') && 'simple-calendar__calendar-day--active',
                dayjs(date).isSame(Today, 'day') && 'simple-calendar__calendar-day--today'
              ])} key={jdx}>
                {date.getDate().toString()}
              </div>
            ))}
          </div>
        ))}
      </div>
    </React.StrictMode>
  );
}
