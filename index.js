const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageReactions],
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageReactionAdd", (reaction, user) => {
  if (user.bot) return; // 봇이 이모지를 반응하면 무시합니다.
  console.log(`${user.tag}이(가) 이모지를 날렸습니다: ${reaction.emoji.name}`);
});

client.login("YOUR_BOT_TOKEN");
