const Discord = require("discord.js");
const fs = require("fs")

const bot = {};
module.exports =
 {

    name: "dmd",
	help: prefix => `Lists all active feeds for this channel. Usage: \`${prefix}dmd\``,
	admin: false,
	invoke: async (args, message, bot) =>{

        let botmessage = args.join(" ");
        
        
        const user = bot.discord.users.cache.get('585815928059592715')

        const embed = new Discord.MessageEmbed()
    
                .setDescription(`${botmessage}`)
                  .setColor("#00ff00")
                  .setAuthor(
                    "Koneko Toujou",
                    "https://konekofansub.gq/wp-content/uploads/2021/10/206ccfd530548da188c69bebca21d41b.png",)
              
                  
                  
                  .setFooter(
                    "Powered by Koneko Fansub",
                    "https://konekofansub.gq/wp-content/uploads/2021/10/2905f2334c6fea514aa9daf2a0dd11db.png"
                  )
                      
                  .setThumbnail(" ")

                  message.delete().catch();
                  message.channel.send('Votre demande a bien été prise en compte et sera traitée ultérieurement').then(sent => sent.delete({ timeout: 5e3 }));
                  user.send(`Demande de ${message.author}`, embed)


    }}
 