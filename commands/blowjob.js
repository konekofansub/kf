const nekoclient = require('nekos.life');
const neko = new nekoclient();
const Discord = require("discord.js");

module.exports =
{
	name: "blowjob",
	help: prefix => `Adds a feed to this channel. Usage: \`${prefix}add url\``,
	admin: false,
	invoke: async (bot, message, args) => {if (message.channel.nsfw === true) {
        let msg = await message.channel.send("Generating <a:emoji_46:814085465288081448>") 

    if (!message.guild) return;
        async function blowjob() {
        const GIF = await neko.nsfw.bJ();
        const embed = new Discord.MessageEmbed()
        .setColor('#202225')
        .setImage(GIF.url)
        .setAuthor(
            "Koneko Toujou",
            "https://konekofansub.gq/wp-content/uploads/2021/10/206ccfd530548da188c69bebca21d41b.png",)
  
          
          
          .setFooter(
            "Powered by Koneko Fansub",
            "https://konekofansub.gq/wp-content/uploads/2021/10/2905f2334c6fea514aa9daf2a0dd11db.png"
          )
        .setTitle("<:D1HktkQU4AE9K2w1:813884031094751232> BLOWJOB <:D1HktkQU4AE9K2w1:813884031094751232>")

        message.channel.send(embed);
    
    }
        blowjob();
        msg.delete();

    }else {
        message.channel.send("Ce n'est pas un salon NSFW") 
    } 
}
}