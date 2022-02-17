const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'pussy',
    async  execute(client, message, args){
        let msg = await message.channel.send("Generating <a:emoji_46:814085465288081448> ") 

        if (message.channel.nsfw === true) {
        if (!message.guild) return;
            async function pussy() {
            const GIF = await neko.nsfw.pussy();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle("<:578727856297738241:813397063932313641> PUSSY <:578727856297738241:813397063932313641>")
            .setAuthor(
                "Koneko Toujou#3793",
                "https://images-ext-2.discordapp.net/external/iZTtw-7xAJckmib3hOzdzv1q5iRAMGIgmjl0BWRSMP4/https/cdn.discordapp.com/avatars/810490720736641075/c459726c2b19bb5e16b41b697d380d96.webp",)
            .setFooter("Powered by Koneko Fansub", "http://ekladata.com/mn4Y7yTW38eQaFVYSmwxByXRDPU@150x180.png")  
                      .setImage(GIF.url)
            message.channel.send(embed);
            }
            pussy();
            msg.delete();

    
    }else {
        message.channel.send("Ce n'est pas un salon NSFW") 
    } 
}
}