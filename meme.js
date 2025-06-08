module.exports = {
  name: 'meme',
  description: 'Get a random meme',
  async execute(interaction) {
    const memes = [
      'https://i.imgflip.com/30b1gx.jpg',
      'https://i.imgflip.com/26am.jpg',
      'https://i.imgflip.com/1bij.jpg'
    ];
    const meme = memes[Math.floor(Math.random() * memes.length)];
    interaction.reply(meme);
  }
};
