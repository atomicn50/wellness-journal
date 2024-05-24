import moment from 'moment-timezone';

const TIMEZONE = "America/Los Angeles";

export const getDate = (): string => moment().format('dddd, MMMM D, YYYY');

export const getHour = (): number => moment().tz(TIMEZONE).hour();

export const WEEKDAY_ABBREVIATIONS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
export const getCurrentWeekDays = () => {
   // Get the start of the current week
  const today = moment().startOf('week');
  const days = [];
  
  for (let i = 0; i < 7; i++) {
    const day = today.clone().add(i, 'days').date();
    days.push([WEEKDAY_ABBREVIATIONS[i], day]);
  }

  return days;
}

export const getDayOfMonth = () => {
  return moment().date();
};

export const getCurrentWeek = () => moment().week();