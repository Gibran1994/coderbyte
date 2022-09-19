const crypto = require("crypto");

//method to determine partition key
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  //this is assigned returned as a response of the method
  let partitionKey;
  let data;

  //if event exists
  if (event) {
    //if partition key in event exists
    if (event.partitionKey) {
      data = JSON.stringify(event.partitionKey);
    } else {
      data = JSON.stringify(event);
    }
    partitionKey =  data.length > MAX_PARTITION_KEY_LENGTH? crypto.createHash("sha3-512").update(data).digest("hex") : data;
  } else{
    //if all checks fail, return TRIVIAL_PARTITION_KEY
    partitionKey = TRIVIAL_PARTITION_KEY;
  }
  return partitionKey;
};