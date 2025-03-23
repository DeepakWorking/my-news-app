import moment, { Moment } from 'moment';

type TDateType = string | number | Date | Moment;

export const getFormattedDate = (date?: TDateType, format = 'MMM DD, YYYY') => {
  return moment(date).format(format);
};
