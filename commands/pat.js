const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports =
{
	name: "pat",
	help: prefix => `Adds a feed to this channel. Usage: \`${prefix}add url\``,
	admin: false,
	invoke: async (bot, message, args) => {
        let msg = await message.channel.send("Generating <a:emoji_46:814085465288081448> ") 

        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.pat();
                const embed = new Discord.MessageEmbed()
                .setColor('#202225')
                .setTitle(`${message.author.tag} patted themselves`)
                .setImage(GIF.url)
                .setAuthor(
                    "Koneko Toujou",
                    "https://konekofansub.gq/wp-content/uploads/2021/10/206ccfd530548da188c69bebca21d41b.png",)
          
                  
                  
                  .setFooter(
                    "Powered by Koneko Fansub",
                    "https://konekofansub.gq/wp-content/uploads/2021/10/2905f2334c6fea514aa9daf2a0dd11db.png"
                  )
                message.channel.send(embed);
            }
            no_ping();
            msg.delete();

            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.pat();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} patted ${member.user.tag}`)
            .setImage(GIF.url)
            .setAuthor(
                "Koneko Toujou#3793",
                "https://images-ext-2.discordapp.net/external/iZTtw-7xAJckmib3hOzdzv1q5iRAMGIgmjl0BWRSMP4/https/cdn.discordapp.com/avatars/810490720736641075/c459726c2b19bb5e16b41b697d380d96.webp",)
            .setFooter("Powered by Koneko Fansub", "http://ekladata.com/mn4Y7yTW38eQaFVYSmwxByXRDPU@150x180.png")
            message.channel.send(embed);
            }
            ping();
            msg.delete();

        }
    }
}