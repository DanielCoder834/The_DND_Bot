const d20 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']

module.exports = function(msg, args)
{
    const index = Math.floor(Math.random() * d20.length);
    msg.reply(d20[index]);
}