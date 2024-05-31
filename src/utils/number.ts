export function calculateProgressiveNumber({
  startNumber,
  startDate,
  range,
}: {
  startNumber: number
  startDate: Date
  range: { min: number; max: number }
}) {
  const MS_IN_DAY = 1000 * 60 * 60 * 24
  const daysDiff = Math.floor(
    (new Date().getTime() - startDate.getTime()) / MS_IN_DAY,
  )

  let result = startNumber
  for (let i = 0; i < daysDiff; i++) {
    const timestamp = startDate.getTime() + i * MS_IN_DAY
    const randomizer = Number(String(timestamp).slice(3, 7))
    result += range.min + (randomizer % (range.max - range.min))
  }

  return result
}
