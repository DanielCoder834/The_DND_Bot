const d12 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

module.exports = function(msg, args)
{
    const index = Math.floor(Math.random() * d12.length);
    msg.reply(d12[index]);
}