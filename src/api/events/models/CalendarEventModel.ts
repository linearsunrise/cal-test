import CalendarEventDTO from "../dtos/CalendarEventDTO";

export default class CalendarEventModel {
  constructor(
    public beginDate: Date,
    public endDate: Date,
    public title: string,
    public description?: string,
    public isAllDay: boolean = false
  ) {}

  static fromDto(dto: CalendarEventDTO) {
    return new CalendarEventModel(
      dto.beginDate,
      dto.endDate,
      dto.title,
      dto.description,
      dto.isAllDay
    );
  }
}
