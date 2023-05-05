export default class CalendarException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CalendarException';
  }
}
