const d8 = ['1', '2', '3', '4', '5', '6', '7', '8']

module.exports = function(msg, args)
{
    const index = Math.floor(Math.random() * d8.length);
    msg.reply(d8[index]);
}