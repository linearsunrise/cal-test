import CalendarEventModel from '@/api/events/models/CalendarEventModel';

export default class CalendarEventCard {
  constructor (
    public event: CalendarEventModel,
    public begin: Date,
    public end: Date,
  ) {}
}