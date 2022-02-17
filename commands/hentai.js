const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports =
{
	name: "hentai",
	help: prefix => `Adds a feed to this channel. Usage: \`${prefix}add url\``,
	admin: false,
	invoke: async (bot, message, args) => {
        let msg = await message.channel.send("Generating <a:emoji_46:814085465288081448> ") 

        if (!message.guild) return;
        if (message.channel.nsfw === true) {

            async function hentai() {
            const GIF = await neko.nsfw.hentai();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setAuthor(
                "Koneko Toujou",
                "https://konekofansub.gq/wp-content/uploads/2021/10/206ccfd530548da188c69bebca21d41b.png",)
      
              
              
              .setFooter(
                "Powered by Koneko Fansub",
                "https://konekofansub.gq/wp-content/uploads/2021/10/2905f2334c6fea514aa9daf2a0dd11db.png"
              )            .setImage(GIF.url)
            message.channel.send(embed);
            }
            hentai();
            msg.delete();

        }else {
            message.channel.send("Ce n'est pas un salon NSFW") 
        } 
    }
    }