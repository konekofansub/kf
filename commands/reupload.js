const Discord = require("discord.js");
const fs = require("fs")

const bot = {};
module.exports =
 {

    name: "reup",
	help: prefix => `Lists all active feeds for this channel. Usage: \`${prefix}dmd\``,
	admin: false,
	invoke: async (args, message, bot) =>{

        let botmessage = args.join(" ");
        
        
        const user = bot.discord.users.cache.get('585815928059592715')

        const embed = new Discord.MessageEmbed()
    
                .setDescription(`${botmessage}`)
                  .setColor("#00ff00")
                    .setAuthor(
                      "Maruchi Hentai #3841",
                      "https://maruchihentai.ga/wp-content/uploads/2020/08/Maruchi-hentai.png",)
                      .setFooter(
                        "Powered by Koneko Fansub",
                        "http://ekladata.com/mn4Y7yTW38eQaFVYSmwxByXRDPU@150x180.png"
                      )
                      
                  .setThumbnail(" ")

                  message.delete().catch();
                  message.channel.send('Votre demande a bien été prise en compte et sera traitée ultérieurement').then(sent => sent.delete({ timeout: 5e3 }));
                  user.send(`Demande de ${message.author}`, embed)


    }}
 