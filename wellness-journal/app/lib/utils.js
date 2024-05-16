import moment from 'moment-timezone';

const TIMEZONE = "America/Los Angeles";
export function getHour() {
  return moment().tz(TIMEZONE).hour();
}