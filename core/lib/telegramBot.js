const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false }); 

function sendMessage(msg) {
    bot.sendMessage(process.env.TELEGRAM_CHANNEL_ID, msg);
}

module.exports = {
    sendMessage: sendMessage
};

