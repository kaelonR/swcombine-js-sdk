import { TTimestampUnitOptions } from '@/types'

export interface ISwcTimestamp {
  toUnixTimestamp(unit: TTimestampUnitOptions): number
  toDate(): Date

  getYear(): number

getDay(): number

getHour(): number
getMinute(): number

getSecond(): number
}
