// Chamando o Discord.JS e o arquivo .json

const { Client, Intents } = require('discord.js');
const { token } = require("./config.json");

// ?
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Avisando quando o bot ligar, dizendo: "The bot is on"
client.once('ready', () => {
    console.log("The bot is on!");
});

// Respondendo alguns comandos
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
		await console.log("Log: The bot has said: \"Pong!\"");
	} else if (commandName === 'beep') {
		await interaction.reply('Boop!');
	}
});


client.login(token);