const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'anal',
   async execute(client, message, args){
        if (message.channel.nsfw === true) {
            let msg = await message.channel.send("Generating <a:emoji_46:814085465288081448> ") 
            message.delete();

        if (!message.guild) return;
            async function anal() {
            const GIF = await neko.nsfw.anal();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle("<:714450415160393811:813426840499650651> ANAL <:714450415160393811:813426840499650651>")

            .setImage(GIF.url)
            .setAuthor(
                "Koneko Toujou#3793",
                "https://images-ext-2.discordapp.net/external/iZTtw-7xAJckmib3hOzdzv1q5iRAMGIgmjl0BWRSMP4/https/cdn.discordapp.com/avatars/810490720736641075/c459726c2b19bb5e16b41b697d380d96.webp",)
            .setFooter("Powered by Koneko Fansub", "https://konekofansub.gq/wp-content/uploads/2021/10/2905f2334c6fea514aa9daf2a0dd11db.png")
            message.channel.send(embed);
            }
            anal();
            msg.delete();



        }else {
            message.channel.send("Ce n'est pas un salon NSFW") 
        } 
    }
}