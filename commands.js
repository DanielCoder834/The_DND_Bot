const flip = require("./commands/dice.js");
const d4 = require("./commands/d4.js");
const d6 = require("./commands/d6.js");
const d8 = require("./commands/d8.js");
const d10 = require("./commands/d10.js");
const d12 = require("./commands/d12.js");
const d20 = require("./commands/d20.js");
const info = require("./commands/commandInfo.js");
require("dotenv").config();

const commands = { flip, d4, d6, d8, d10, d12, d20, info };

module.exports = async function (msg) {
    if (msg.channel.id == process.env.MYCHANNEL1 || msg.channel.id == process.env.MYCHANNEL2){
        let tokens = msg.content.split(" ");
        let command = tokens.shift();
        if (command.charAt(0) === "!") {
          command = command.substring(1);
          commands[command](msg, tokens);
        }
    }
};
