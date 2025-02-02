/**
 * Utility class for working with Star Wars Combine timestamps. Represents Combine  Galactic Time and can convert unix timestamps and Date objects to/from CGT.
 */
export default class SwcTimestamp {
  year: number
  day: number
  hour: number
  minute: number
  second: number

  private static swcStart = new Date(1998, 11, 3, 7, 0, 0)

  /**
   * Create a new SwcTimestamp object for a specific moment in Combine Galactic Time.
   */
  constructor(year: number, day: number, hour: number = 0, minute: number = 0, second: number = 0) {
    this.year = year
    this.day = day
    this.hour = hour
    this.minute = minute
    this.second = second
  }

  /**
   * Convert a unix timestamp to Combine Galactic Time.
   * @param unixTimestamp timestamp to convert. Can be either seconds or milliseconds, the code will detect which units to use.
   */
  static fromUnixTimestamp(unixTimestamp: number): SwcTimestamp {
    if (unixTimestamp < 100000000000) {
      unixTimestamp = unixTimestamp * 1000
    }
    return this.calculateSwcTimestampFromMillisecondsSinceStart(unixTimestamp - this.swcStart.getTime())
  }

  /** convert a Date object into Combine Galactic Time. */
  static fromDate(date: Date): SwcTimestamp {
    return this.calculateSwcTimestampFromMillisecondsSinceStart(date.getTime() - this.swcStart.getTime())
  }

  /** Get the current Combine Galactic Time */
  static now(): SwcTimestamp {
    return SwcTimestamp.fromDate(new Date())
  }

  /**
   * Convert the SWC timestamp into a unix timestamp
   * @param unit whether the unix timestamp should be in seconds or milliseconds.
   */
  toUnixTimestamp(unit: 'seconds' | 'milliseconds'): number {
    if (unit === 'seconds')
      return this.calculateMillisecondsSinceStartFromSwcTimestamp() / 1000 + SwcTimestamp.swcStart.getTime() / 1000
    else return this.calculateMillisecondsSinceStartFromSwcTimestamp() + SwcTimestamp.swcStart.getTime()
  }

  /** Convert the SWC timestamp into a Date object */
  toDate(): Date {
    return new Date(this.calculateMillisecondsSinceStartFromSwcTimestamp() + SwcTimestamp.swcStart.getTime())
  }

  private static calculateSwcTimestampFromMillisecondsSinceStart(msSinceSwcStart: number): SwcTimestamp {
    const msPerYear = 365 * 24 * 60 * 60 * 1000
    const msPerDay = 24 * 60 * 60 * 1000
    const msPerHour = 60 * 60 * 1000
    const msPerMinute = 60 * 1000

    const year = Math.floor(msSinceSwcStart / msPerYear)
    msSinceSwcStart -= year * msPerYear

    const day = Math.floor(msSinceSwcStart / msPerDay)
    msSinceSwcStart -= day * msPerDay

    const hour = Math.floor(msSinceSwcStart / msPerHour)
    msSinceSwcStart -= hour * msPerHour

    const minute = Math.floor(msSinceSwcStart / msPerMinute)
    msSinceSwcStart -= minute * msPerMinute

    const seconds = Math.floor(msSinceSwcStart / 1000)

    return new SwcTimestamp(year, day + 1, hour - 1, minute, seconds)
  }

  private calculateMillisecondsSinceStartFromSwcTimestamp(): number {
    const msPerYear = 365 * 24 * 60 * 60 * 1000
    const msPerDay = 24 * 60 * 60 * 1000
    const msPerHour = 60 * 60 * 1000
    const msPerMinute = 60 * 1000

    let msSinceSwcStart = 0

    msSinceSwcStart += this.year * msPerYear
    msSinceSwcStart += (this.day - 1) * msPerDay
    msSinceSwcStart += (this.hour + 1) * msPerHour
    msSinceSwcStart += this.minute * msPerMinute
    msSinceSwcStart += this.second * 1000

    return msSinceSwcStart
  }
}
