module.exports = {
  name: 'order',
  description: 'Place an order for a product (Car livery, clothes, bots)',
  async execute(interaction) {
    const item = interaction.options.getString('item');
    const userId = interaction.user.id;

    const fs = require('fs');
    const data = require('../../data/economy.json');
    if (!data[userId]) data[userId] = { balance: 100, orders: [] };

    const price = 50;
    if (data[userId].balance < price) {
      return interaction.reply('Not enough balance. Each item costs 50 credits.');
    }

    data[userId].balance -= price;
    data[userId].orders.push({ item, date: new Date().toISOString() });
    fs.writeFileSync('./data/economy.json', JSON.stringify(data, null, 2));

    interaction.reply(`✅ Order placed for: **${item}**! 50 credits deducted.`);
  }
};
