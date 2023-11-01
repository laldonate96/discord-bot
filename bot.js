const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv').config();
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    keepAlive: true
})

const token = process.env.DISCORD_BOT_TOKEN;

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    content = message.content
    
    const original = content;
    const fx = 'fx';

    const pos = 8; 

    const fxed = original.slice(0, pos) + fx + original.slice(pos);

    if(content.includes('twitter') && !content.includes('fx')) {
        message.channel.send(fxed);
    }
});

client.login(token);

function pingEndpoint() {
    setInterval(() => {
        https.get('https://discord-bot-tau-woad.vercel.app/ping', (res) => {
        });
    }, 2 * 60 * 1000);
}

pingEndpoint();