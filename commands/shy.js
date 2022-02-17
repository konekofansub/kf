const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: "shy",
	help: prefix => `Adds a feed to this channel. Usage: \`${prefix}add url\``,
	admin: false,
	invoke: async (args, message, bot) =>
    {
    let msg = await message.channel.send("Generating <a:emoji_46:814085465288081448> ") 

    if (!message.guild) return;
        if (message.mentions.members.size === 0) {
        async function no_ping() {
        const url = `https://api.tenor.com/v1/random?q=anime_shy`

        const res = await fetch(url);
        const result = await res.json();

        const gif = Math.floor(Math.random() * result.results.length);
        const embed = new Discord.MessageEmbed()

            .setColor('#202225')
            .setAuthor(
                "Koneko Toujou",
                "https://konekofansub.gq/wp-content/uploads/2021/10/206ccfd530548da188c69bebca21d41b.png",)
      
              
              
              .setFooter(
                "Powered by Koneko Fansub",
                "https://konekofansub.gq/wp-content/uploads/2021/10/2905f2334c6fea514aa9daf2a0dd11db.png"
              )

              .setImage(`${result.results[0].media[0].gif.url}`)
              .setColor('RANDOM')              
              message.channel.send(embed);
        }
        no_ping();
        msg.delete();

        }
        if (message.mentions.members.size !== 0) {
        async function ping() {
            const url = `https://api.tenor.com/v1/random?q=anime_shy`

            const res = await fetch(url);
            const result = await res.json();
            const member = message.mentions.members.first();

            const gif = Math.floor(Math.random() * result.results.length);
    
        const embed = new Discord.MessageEmbed()
        .setColor('#202225')
        .setTitle(`${message.author.tag} est tout(e) gêné(e) face ${member.user.tag}`)
        .setImage(`${result.results[0].media[0].gif.url}`)

        .setAuthor(
            "Koneko Toujou",
            "https://konekofansub.gq/wp-content/uploads/2021/10/206ccfd530548da188c69bebca21d41b.png",)
  
          
          
          .setFooter(
            "Powered by Koneko Fansub",
            "https://konekofansub.gq/wp-content/uploads/2021/10/2905f2334c6fea514aa9daf2a0dd11db.png"
          )
        message.channel.send(embed);
        }
        ping();
        msg.delete();

    }
}
}
