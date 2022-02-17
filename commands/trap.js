const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports =
{
	name: "trap",
	help: prefix => `Adds a feed to this channel. Usage: \`${prefix}add url\``,
	admin: false,
	invoke: async (bot, message, args) => {
        let msg = await message.channel.send("Generating <a:emoji_46:814085465288081448> ") 

        if (message.channel.nsfw === true) {
        if (!message.guild) return;
            async function trap() {
            const GIF = await neko.nsfw.trap();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle("<:baise:790242995865255957> TRAP <:baise:790242995865255957>")
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
            trap();
            msg.delete();

        }else {
            message.channel.send("Ce n'est pas un salon NSFW") 

        } 
}
}