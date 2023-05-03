export default interface CalendarEventDTO {
  beginDate: Date;
  endDate: Date;
  title: string;
  description?: string;
  isAllDay?: boolean;
}
