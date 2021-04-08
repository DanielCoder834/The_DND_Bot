const Discord = require('discord.js');

module.exports = function(msg, args)
{
// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('##11806A')
	//#0099ff'
	.setTitle('DND Bot Commands')
	.setAuthor('Daniel')
	.setDescription('Here are the commands for the DND Bot. It just rolls dice for now but I will add description of spells in the future')
	.addFields(
		{ name: 'Do not try to purposely break the bot', value: 'If you have any other suggestions, I am happy to hear them' },
		{ name: '\u200B', value: '\u200B' },
        { name: '!flip', value: 'Flips a coin', inline: true },
		{ name: '!d4', value: 'Rolls a 4 sided die', inline: true },
		{ name: '!d6', value: 'Rolls a 6 sided die', inline: true },
        { name: '!d8', value: 'Rolls a 8 sided die', inline: true },
        { name: '!d10', value: 'Rolls a 10 sided die', inline: true },
        { name: '!d12', value: 'Rolls a 12 sided die', inline: true },
        { name: '!d20', value: 'Rolls a 20 sided die', inline: true },
	)
    msg.channel.send(exampleEmbed);
}