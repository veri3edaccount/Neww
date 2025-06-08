module.exports = {
  name: 'strike',
  description: 'Add an infraction to a user (HR only)',
  async execute(interaction) {
    if (!interaction.member.roles.cache.some(role => role.name.includes('HR'))) {
      return interaction.reply({ content: 'Only HR can use this command.', ephemeral: true });
    }

    const target = interaction.options.getUser('user');
    const type = interaction.options.getString('type');
    const types = ['notice', 'warning', 'strike', 'demotion strike'];

    if (!types.includes(type)) {
      return interaction.reply({ content: `Invalid type. Choose one of: ${types.join(', ')}`, ephemeral: true });
    }

    const fs = require('fs');
    const data = require('../../data/infractions.json');
    if (!data[target.id]) data[target.id] = [];
    data[target.id].push({ type, date: new Date().toISOString() });

    fs.writeFileSync('./data/infractions.json', JSON.stringify(data, null, 2));
    interaction.reply(`${target.tag} has been given a **${type}** infraction.`);
  }
};
