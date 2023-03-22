# OCR Discord Bot

This is a simple Discord bot that can recognize text from images and post the results in a text message. It uses Tesseract OCR engine for text recognition and can split long text into multiple messages to comply with Discord's message length limit. It's an improved version of [arushnath28](https://medium.com/@arushnath28/creating-a-text-recognition-discord-bot-ocr-using-discord-js-ae45668a64b7) OCR Bot

# Installation
1. Clone this repository or download the files as a ZIP archive.
2. Install the nesessary dependencies from your text editor terminal by running  `npm install discord.js tesseract.js` 
3. Replace `'TOKEN HERE'` in bot.js with your Discord bot token. Follow the [Discord.js guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) to create a bot application and get a bot token.
4. Run the `bot.js` code to start the bot.

# Limitations
Please note that Discord's API limits message length to 2000 characters. If the text recognized from the image exceeds this limit, the bot will automatically split the text into multiple messages.

