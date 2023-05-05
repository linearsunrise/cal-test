import { faker } from '@faker-js/faker';
import CalendarEvent from './CalendarEvent';
import dayjs from 'dayjs';
import './WeekDay.scss';
import _ from 'lodash';
import StyleUtils from '@/lib/style/StyleUtils';
import React from 'react';
import WeekDays from '@/components/lib/calendar/enums/WeekDays';
import { WEEK_DAYS } from '@/components/lib/calendar/consts';


export default function WeekDay(props: {
  children?: React.ReactNode;
  day: WeekDays;
}) {
  const date = dayjs(faker.date.recent()).add(
    _.random(0, 12 * 60, false),
    'minutes'
  );
  const isToday = +props.day === 3;
  return (
    <React.StrictMode>
      <div className="week-day">
        <div className="week-day__head">
          <div
            className={StyleUtils.getStyleString([
              'week-day__head-day',
              isToday && 'week-day__head-day--today',
            ])}
          >
            {props.day?.toString().padStart(2, '0')}
          </div>
          <div className="week-day__head-weekday">
            {props.day ? WEEK_DAYS[props.day] : ''}
          </div>
        </div>
        <div className="week-day__ribbon">
          <CalendarEvent
            top={0}
            beginEvent={date.toDate()}
            endEvent={_(date)
              .thru((djs) => djs.add(_.random(0, 12, false), 'hours'))
              .thru((djs) =>
                djs.isAfter(date.clone().endOf('day')) ? date.endOf('day') : djs
              )
              .thru((djs) => djs.toDate())
              .value()}
          />
        </div>
      </div>
    </React.StrictMode>
  );
}
