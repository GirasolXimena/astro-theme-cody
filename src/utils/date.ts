const dateOptions = {
  locale: "en-GB",
  options: {
    day: "numeric",
    month: "short",
    year: "numeric",
  }
};

const dateFormat = new Intl.DateTimeFormat(
  dateOptions.locale,
  dateOptions.options as Intl.DateTimeFormatOptions
);

export function getFormattedDate(
  date: string | number | Date,
  options?: Intl.DateTimeFormatOptions,
  locale?: string,
) {
  if (typeof options !== "undefined") {
    return new Date(date).toLocaleDateString(locale ?? dateOptions.locale, options);
  }

  return dateFormat.format(new Date(date));
}

export const isDateInPast = (firstDate: Date | string) => {
  if (!(firstDate instanceof Date)) firstDate = new Date(firstDate)
  return firstDate.setHours(0, 0, 0, 0) <= new Date().setHours(0, 0, 0, 0)
}