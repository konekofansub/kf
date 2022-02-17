const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'blowjob',
   async execute(client, message, args){
        if (message.channel.nsfw === true) {
            let msg = await message.channel.send("https://www.gif-maniac.com/gifs/54/54402.gif") 

        if (!message.guild) return;
            async function blowjob() {
            const GIF = await neko.nsfw.bJ();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setImage(GIF.url)
            .setAuthor(
                "Koneko Toujou#3793",
                "https://images-ext-2.discordapp.net/external/iZTtw-7xAJckmib3hOzdzv1q5iRAMGIgmjl0BWRSMP4/https/cdn.discordapp.com/avatars/810490720736641075/c459726c2b19bb5e16b41b697d380d96.webp",)
            .setFooter("Powered by Koneko Fansub", "http://ekladata.com/mn4Y7yTW38eQaFVYSmwxByXRDPU@150x180.png")
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