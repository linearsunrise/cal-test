import WeekDays from '../enums/WeekDays';


export const WEEK_DAYS = Object.freeze({
  [WeekDays.SUN]: 'Вс',
  [WeekDays.MON]: 'Пн',
  [WeekDays.TUE]: 'Вт',
  [WeekDays.WED]: 'Ср',
  [WeekDays.THU]: 'Чт',
  [WeekDays.FRI]: 'Пт',
  [WeekDays.SAT]: 'Сб',
} as const);
