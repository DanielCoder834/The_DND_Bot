const coinFlips = ["heads", "tails"]

module.exports = function(msg, args)
{
const index = Math.floor(Math.random() * coinFlips.length);
msg.reply(coinFlips[index]);
};