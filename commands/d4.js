const d4 = ['1', '2', '3', '4']

module.exports = function(msg, args)
{
    const index = Math.floor(Math.random() * d4.length);
    msg.reply(d4[index]);
}