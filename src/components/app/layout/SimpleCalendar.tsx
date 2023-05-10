import Calendar from '@/components/lib/calendar/Calendar';
import React from 'react';
import './SimpleCalendar.scss';
import dayjs from 'dayjs';
import StyleUtils from '@/lib/style/StyleUtils';
import { useParams } from 'react-router-dom';
type CalendarDate = {
  year: number;
  month: number;
  day: number;
};

const isSame =
  (unit: keyof CalendarDate) => (date: Date, calendar: CalendarDate) =>
    dayjs(date).isSame(
      new Date(calendar.year, calendar.month, calendar.day),
      unit
    );

const isSameMonth = isSame('month');

export default function SimpleCalendar(props: { date: CalendarDate }) {
  const date = new Date(props.date.year, props.date.month, props.date.day);
  const calendar = new Calendar(1);
  const isToday = (date: Date) => dayjs(new Date()).isSame(date, 'day');

  function handleDateClick(date: Date) {
    console.log(date, dayjs(date).week());
  }

  const params = useParams();

  console.log(params);

  return (
    <React.StrictMode>
      <div className="simple-calendar">
        <div className="simple-calendar__month-title">
          {dayjs(date).locale('ru').format('MMMM')} {dayjs(date).format('YYYY')}
        </div>
        <div className="simple-calendar__week">
          {calendar.weekDays().map((weekDay, idx) => (
            <div className="simple-calendar__calendar-day" key={idx}>
              {weekDay}
            </div>
          ))}
        </div>
        {calendar.monthDates(props.date.year, props.date.month).map((week, idx) => (
          <div className="simple-calendar__week" key={idx}>
            {week.map((date, jdx) => (
              <div
                className={StyleUtils.getStyleString([
                  'simple-calendar__calendar-day',
                  isSameMonth(date, props.date) &&
                    'simple-calendar__calendar-day--active',
                  isToday(date) && 'simple-calendar__calendar-day--today',
                ])}
                key={jdx}
                onClick={() => handleDateClick(date)}
              >
                {date.getDate().toString()}
              </div>
            ))}
          </div>
        ))}
      </div>
    </React.StrictMode>
  );
}
