const d = new Date()
const months = [
  'januari',
  'februari',
  'mars',
  'april',
  'maj',
  'juni',
  'juli',
  'augusti',
  'september',
  'oktober',
  'november',
  'december',
]

const daysOfWeek = [
  'Söndag',
  'Måndag',
  'Tisdag',
  'Onsdag',
  'Torsdag',
  'Fredag',
  'Lördag',
]
export const date = {
  month: months[d.getMonth()],
  day: d.getDate(),
  dayOfWeek: daysOfWeek[d.getDay()],
}
