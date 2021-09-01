/**
 * Design a logger system that receives a stream of messages along with their
 * timestamps. Each unique message should only be printed at most every 10 seconds
 *
 * All messages will come in chronological order. Several messages may arrive at
 * the same timestamp.
 */

Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (this.map.has(message)) {
    if (timestamp < this.map.get(message) + 10) {
      return false;
    }
  }

  this.map.set(message, timestamp);
  return true;
};
