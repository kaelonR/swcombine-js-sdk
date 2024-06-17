export default class SwcTimestamp {
  year: number;
  day: number;
  hour: number;
  minute: number;
  seconds: number;

  private static swcStart = new Date(1998, 11, 3, 7, 0, 0);

  constructor(year: number, day: number, hour: number, minute: number, seconds: number) {
    this.year = year;
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.seconds = seconds;
  }

  static fromUnixTimestamp(unixTimestamp: number): SwcTimestamp {
    return this.calculateSwcTimestampFromMillisecondsSinceStart((unixTimestamp * 1000) - this.swcStart.getTime());
  }

  static fromDate(date: Date): SwcTimestamp {
    return this.calculateSwcTimestampFromMillisecondsSinceStart(date.getTime() - this.swcStart.getTime());
  }

  toUnixTimestamp(): number {
    return this.calculateMillisecondsSinceStartFromSwcTimestamp() / 1000 + SwcTimestamp.swcStart.getTime() / 1000;
  }

  toDate(): Date {
    return new Date(this.calculateMillisecondsSinceStartFromSwcTimestamp() + SwcTimestamp.swcStart.getTime());
  }

  private static calculateSwcTimestampFromMillisecondsSinceStart(msSinceSwcStart: number): SwcTimestamp {
    const msPerYear = 365 * 24 * 60 * 60 * 1000;
    const msPerDay = 24 * 60 * 60 * 1000;
    const msPerHour = 60 * 60 * 1000;
    const msPerMinute = 60 * 1000;

    const year = Math.floor(msSinceSwcStart / msPerYear);
    msSinceSwcStart -= year * msPerYear;

    const day = Math.floor(msSinceSwcStart / msPerDay);
    msSinceSwcStart -= day * msPerDay;

    const hour = Math.floor(msSinceSwcStart / msPerHour);
    msSinceSwcStart -= hour * msPerHour;

    const minute = Math.floor(msSinceSwcStart / msPerMinute);
    msSinceSwcStart -= minute * msPerMinute;

    const seconds = Math.floor(msSinceSwcStart / 1000);

    return new SwcTimestamp(year, day + 1, hour - 1, minute, seconds);
  }

  private calculateMillisecondsSinceStartFromSwcTimestamp(): number {
    const msPerYear = 365 * 24 * 60 * 60 * 1000;
    const msPerDay = 24 * 60 * 60 * 1000;
    const msPerHour = 60 * 60 * 1000;
    const msPerMinute = 60 * 1000;

    let msSinceSwcStart = 0;

    msSinceSwcStart += this.year * msPerYear;
    msSinceSwcStart += (this.day - 1) * msPerDay;
    msSinceSwcStart += (this.hour + 1) * msPerHour;
    msSinceSwcStart += this.minute * msPerMinute;
    msSinceSwcStart += this.seconds * 1000;

    return msSinceSwcStart;
  }
}