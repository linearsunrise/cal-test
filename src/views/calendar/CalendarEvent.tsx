import dayjs from 'dayjs';
import './CalendarEvent.scss';
import _ from 'lodash';
import React from 'react';

export default function CalendarEvent(props: {
  top: number;
  beginEvent?: Date;
  endEvent?: Date;
}) {
  const MINUTES_IN_DAY = 24 * 60;
  const eventLength = _(dayjs(props.endEvent))
    .thru((djs) => djs.diff(props.beginEvent, 'minutes'))
    .thru((diffInMinutes) => (diffInMinutes / MINUTES_IN_DAY) * 100)
    .thru(_.floor)
    .value();

  const pos = _(dayjs(props.beginEvent))
    .thru((djs) => djs.diff(dayjs(props.beginEvent).startOf('day'), 'minutes'))
    .thru((diffInMinutes) => (diffInMinutes / MINUTES_IN_DAY) * 100)
    .thru(_.floor)
    .value();

  return (
    <div
      className="calendar-event"
      style={{ top: `${pos}%`, height: `${eventLength}%` }}
    ></div>
  );
}
