import CalendarEventDTO from '@/api/events/dtos/CalendarEventDTO';
import CalendarEventModel from '@/api/events/models/CalendarEventModel';
import dayjs from 'dayjs';
import _ from 'lodash';

export default class CalendarEventWeekView {
  constructor(
    public events: CalendarEventModel[],
  ) {}
  
  
}
