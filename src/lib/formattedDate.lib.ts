/**
 * Date to ISO string, example: 2021-09-01
 * @param {Date} date - Date to format
 * @returns {string}
 */
export const formattedDate = (date: Date) => {
  return new Date(date).toISOString().split('T')[0]
}
