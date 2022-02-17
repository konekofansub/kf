const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'tits',
    async  execute(client, message, args){
        let msg = await message.channel.send("Generating <a:emoji_46:814085465288081448> ") 

        if (!message.guild) return;
        if (message.channel.nsfw === true) {

            async function tits() {
            const GIF = await neko.nsfw.tits();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setAuthor(
                "Koneko Toujou#3793",
                "https://images-ext-2.discordapp.net/external/iZTtw-7xAJckmib3hOzdzv1q5iRAMGIgmjl0BWRSMP4/https/cdn.discordapp.com/avatars/810490720736641075/c459726c2b19bb5e16b41b697d380d96.webp",)
            .setFooter("Powered by Koneko Fansub", "http://ekladata.com/mn4Y7yTW38eQaFVYSmwxByXRDPU@150x180.png")            .setImage(GIF.url)
            message.channel.send(embed);
            }
            tits();
            msg.delete();

        }else {
            message.channel.send("Ce n'est pas un salon NSFW") 
        } 
    }
    }