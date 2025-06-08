module.exports = {
  name: 'kick',
  description: 'Kick a user from the server',
  async execute(interaction) {
    if (!interaction.member.permissions.has('KickMembers')) {
      return interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
    }

    const user = interaction.options.getUser('user');
    const member = interaction.guild.members.cache.get(user.id);
    if (!member) return interaction.reply('User not found.');

    await member.kick();
    interaction.reply(`${user.tag} has been kicked.`);
  }
};
