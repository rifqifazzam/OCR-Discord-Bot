const Discord = require('discord.js');
require("discord-reply");
const bot = new Discord.Client();

const Tesseract = require("tesseract.js");

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    // Check if the message has any attachments
    if (msg.attachments.size > 0) {
        // Loop through all attachments in the message
        msg.attachments.forEach((attachment) => {
            var ImageURL = attachment.proxyURL;

            // Running the image through Tesseract
            Tesseract.recognize(
                ImageURL, 'eng',
                { logger: m => console.log(m) }
            ).then(({ data: { text } }) => {
                // Check if the length of the text is greater than 2000 characters
                if (text.length > 2000) {
                    // Split the text into multiple messages, each with at most 2000 characters
                    const chunks = text.match(/[\s\S]{1,2000}/g) || [];
                    for (const chunk of chunks) {
                        msg.lineReply(chunk);
                    }
                } else {
                    // If the length of the text is less than or equal to 2000 characters, send the text in a single message
                    msg.lineReply(text);
                }
            });
        });
    }
});
bot.login('TOKEN HERE')