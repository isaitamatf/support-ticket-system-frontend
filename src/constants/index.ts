import dayjs from "dayjs";

export const API_URL = "http://localhost:4000";

export const DATE_FORMAT = "YYYY-MM-DD";
export const TIMESTAMP_FORMAT = "YYYY-MM-DDTHH:mm:ss";

export const INITIAL_STATE = {
  tickets: [],
};

export const RANDOM_CLIENTS = [
  "InFlight Dublin",
  "Guinness",
  "Facebook",
  "Google",
  "Zara"
];

export const RANDOM_ISSUES = [
  "The API is returning a CORS error.",
  "The login isn't working.",
  "The navigation menu doesn't appear with the responsive view.",
  "The posts aren't being saved in the database.",
  "The customer doesn't receive the password change emails."
];

export const RANDOM_STATUS = [
  "open",
  "closed"
];

export const RANDOM_DEADLINES = [
  dayjs().subtract(2, 'day').format(TIMESTAMP_FORMAT),
  dayjs().subtract(1, 'day').format(TIMESTAMP_FORMAT),
  dayjs().format(TIMESTAMP_FORMAT),
  dayjs().add(1, 'day').format(TIMESTAMP_FORMAT),
  dayjs().add(2, 'day').format(TIMESTAMP_FORMAT),
];