const Discord = require('discord.js');
const mineflayer = require('mineflayer');

const client = new Discord.Client();
const bot = mineflayer.createBot({
  host: 'mc.example.com', // IP address of the Minecraft server
  port: 25565, // Port
  username: 'botname' // The username the bot will use in Minecraft
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === '!afk') {
    bot.chat('I am now AFK!');
    bot.setControlState('forward', true);
    bot.setControlState('sneak', true);
  }
});

bot.on('spawn', () => {
  console.log('Minecraft bot spawned!');
});

client.login('token');





