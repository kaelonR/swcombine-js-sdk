  import SwcTimestamp from "../src/types/SwcTimestamp.ts";
import {expect} from "chai";

describe('SWCTimestampTests', () => {
  it('should convert from SWC time to unix time', () => {
    //arrange
    const subject = new SwcTimestamp(25, 60, 12, 15, 41);

    //act
    const result = subject.toUnixTimestamp();

    //assert
    expect(result).to.equal(1706210141)
  })
})