const d10 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

module.exports = function(msg, args)
{
    const index = Math.floor(Math.random() * d10.length);
    msg.reply(d10[index]);
}