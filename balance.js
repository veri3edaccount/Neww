module.exports = {
  name: 'balance',
  description: 'Check your balance',
  async execute(interaction) {
    const userId = interaction.user.id;
    const fs = require('fs');
    const data = require('../../data/economy.json');

    if (!data[userId]) data[userId] = { balance: 100, orders: [] };
    interaction.reply(`💰 Your balance is: ${data[userId].balance} credits.`);
  }
};
