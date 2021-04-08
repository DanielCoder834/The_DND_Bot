const d6 = ['1', '2', '3', '4', '5', '6']

module.exports = function(msg, args)
{
    const index = Math.floor(Math.random() * d6.length);
    msg.reply(d6[index]);
}