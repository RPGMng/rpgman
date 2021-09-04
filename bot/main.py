# Importing essential things
import json
import discord

# Some utils variables
message_c = message.content
send_message = message.channel.send
t = open("./config.json", "r")
json_file = json.load(t)

# Creating Discord.Py Client
client = discord.Client()

# Showing which bot aer logged
@client.event
async def on_ready():
    print('Nos fizemos o login em: {0.user}'.format(client))

# Responding the bot
@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message_c.startswith('rpg hello'):
        await message.channel.send('Hello!')
        await print("The bot said: \"Hello\"")

    elif message.content.startswith('rpg ping'):
        await send_message("Pong!")
        await print("The bot said: \"Pong\"")

# Starting the bot with token in: ./config.json
client.run(json_file["token"])
