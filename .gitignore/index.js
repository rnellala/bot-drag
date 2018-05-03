const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', message => {
    if (message.content === 'ping') {
    message.channel.sendMessage('pong');
  }
});
bot.login('NDQxMjM0MDA4NTE3NTA5MTMy.DctTew.9dOarHTRLHnciEcVWyUZ4jsS0GM');
