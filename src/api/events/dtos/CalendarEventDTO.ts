export default interface CalendarEventDTO {
  id: number;
  beginDate: Date;
  endDate: Date;
  title: string;
  description?: string;
  isAllDay?: boolean;
}
