import moment from 'moment-timezone';

const TIMEZONE = "America/Los Angeles";
export const getHour = (): number => moment().tz(TIMEZONE).hour();