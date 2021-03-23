console.log("Beep Boop");

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client(); 
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord()
{
    console.log('👋');
}

const coinFlips = ['heads', 'tails']
const d20 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
const d4 = ['1', '2', '3', '4']
const d6 = ['1', '2', '3', '4', '5', '6']
const d8 = ['1', '2', '3', '4', '5', '6', '7', '8']
const d10 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const d12 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']


client.on('message', gotMessage);

function gotMessage(msg)
{
    if(msg.channel.id == '823896984263458867')
    {
        if(msg.content === '!flip')
        {
            const index = Math.floor(Math.random() * coinFlips.length);
            msg.reply(coinFlips[index]);
            //msg.channel.send('nah');
        }
        else if(msg.content === '!d20')
        {
            const index = Math.floor(Math.random() * d20.length);
            msg.reply(d20[index]);
        }
        else if(msg.content === '!d4')
        {
            const index = Math.floor(Math.random() * d4.length);
            msg.reply(d4[index]);
        }
        else if(msg.content === '!d6')
        {
            const index = Math.floor(Math.random() * d6.length);
            msg.reply(d6[index]);
        }
        else if(msg.content === '!d8')
        {
            const index = Math.floor(Math.random() * d8.length);
            msg.reply(d8[index]);
        }
        else if(msg.content === '!d10')
        {
            const index = Math.floor(Math.random() * d10.length);
            msg.reply(d10[index]);
        }
        else if(msg.content === '!d12')
        {
            const index = Math.floor(Math.random() * d12.length);
            msg.reply(d12[index]);
        }
    }
}