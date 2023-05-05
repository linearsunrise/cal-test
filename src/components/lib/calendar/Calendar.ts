import dayjs from 'dayjs';
import _ from 'lodash';
import CalendarException from './CalendarException';
import WeekDays from './enums/WeekDays';
import { WEEK_DAYS } from './consts';
import CalendarMonths from './enums/CalendarMonths';



export default class Calendar {
  static readonly WEEK_LENGTH = 7;

  private get weekStart() {
    const inRange = (min: number, max: number) => _.partialRight(_.inRange, max, min);
    return _.cond<WeekDays, number>([
      [inRange(WeekDays.SUN, WeekDays.WED + 1), _.identity],
      [_.stubTrue, (value) => value - 7],
    ])(this.startOfWeek);
  }

  constructor(
    private startOfWeek = WeekDays.SUN,
    private displayWeekLength = Calendar.WEEK_LENGTH,
    private week: Record<WeekDays, string> = WEEK_DAYS
  ) {}

  monthDates<D = Date, W = D[]>(
    year: number,
    month: number,
    dayFormatter?: (day: Date) => D | Date,
    weekFormatter?: (week: (Date | D)[]) => W
  ) {
    if (!_.isNumber(year)) {
      throw new CalendarException('The year must be a number');
    }
    if (
      !_.isNumber(month) ||
      !_.inRange(month, CalendarMonths.JAN, CalendarMonths.DEC + 1)
    ) {
      throw new CalendarException('The month must be a number (Jan is 0)');
    }

    return Array.from({ length: this.weeksInMonth(year, month) }).map(
      (il, idx) => {
        const week = Array.from({ length: this.displayWeekLength }).map(
          (jl, jdx) => {
            const date = dayjs(this.weekStartDate(year, month))
              .add(idx * Calendar.WEEK_LENGTH + jdx, 'days')
              .toDate();
            if (_.isNil(dayFormatter)) return date;
            return dayFormatter(date);
          }
        );
        if (_.isNil(weekFormatter)) return week;
        return weekFormatter(week);
      }
    );
  }

  monthDays(year: number, month: number) {
    const getDayOrZero = (date: Date) =>
      _.isEqual(date.getMonth(), month) ? date.getDate() : 0;
    return this.monthDates(year, month, getDayOrZero);
  }

  weekDays() {
    return Array.from({ length: this.displayWeekLength }).map((el, idx) => {
      const weekDay: WeekDays = _(idx + this.startOfWeek)
        .thru((value) => value % Calendar.WEEK_LENGTH)
        .thru(Math.abs)
        .value();
      return this.week[weekDay];
    });
  }

  private weekStartDate(year: number, month: number) {
    return dayjs()
      .set('year', year)
      .set('month', month)
      .startOf('month')
      .startOf('week')
      .day(this.weekStart)
      .toDate();
  }

  private weekEndDate(year: number, month: number) {
    return dayjs()
      .set('year', year)
      .set('month', month)
      .endOf('month')
      .endOf('week')
      .day(this.weekStart)
      .toDate();
  }

  private weeksInMonth(year: number, month: number) {
    return dayjs(this.weekEndDate(year, month)).diff(
      this.weekStartDate(year, month),
      'weeks'
    ) + 1;
  }
}
