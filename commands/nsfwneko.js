const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'hneko',
    async  execute(client, message, args){
        let msg = await message.channel.send("Generating <a:emoji_46:814085465288081448> ") 

        if (!message.guild) return;
            async function nsfwneko() {
            const GIF = await neko.nsfw.neko();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setImage(GIF.url)
            .setAuthor(
                "Koneko Toujou#3793",
                "https://images-ext-2.discordapp.net/external/iZTtw-7xAJckmib3hOzdzv1q5iRAMGIgmjl0BWRSMP4/https/cdn.discordapp.com/avatars/810490720736641075/c459726c2b19bb5e16b41b697d380d96.webp",)
            .setFooter("Powered by Koneko Fansub", "http://ekladata.com/mn4Y7yTW38eQaFVYSmwxByXRDPU@150x180.png")
        
            message.channel.send(embed);
            }
            nsfwneko();
            msg.delete();

            
    }
}