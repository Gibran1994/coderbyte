const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("When event has partition key", () => {
    let event = {partitionKey:"PartitionKeyInEvent"}
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("\"PartitionKeyInEvent\"");
  });

  it("When event does not have partition key", () => {
    let event = "abc";
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("\"abc\"");
  });

});
