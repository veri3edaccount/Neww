module.exports = {
  name: '8ball',
  description: 'Ask the magic 8-ball a question',
  async execute(interaction) {
    const responses = [
      'It is certain.', 'Without a doubt.', 'Most likely.',
      'Ask again later.', 'Cannot predict now.',
      'Don’t count on it.', 'Very doubtful.', 'My sources say no.'
    ];
    const answer = responses[Math.floor(Math.random() * responses.length)];
    interaction.reply(`🎱 ${answer}`);
  }
};
