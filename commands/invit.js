const Discord = require("discord.js");
module.exports =
 {

    name: "invit",
	help: prefix => `Lists all active feeds for this channel. Usage: \`${prefix}say\``,
	admin: false,
	invoke: async (args, message, bot) =>{
   

        const embed = new Discord.MessageEmbed()
    
                .setDescription(`[**Lien invitation du bot**](https://discord.com/api/oauth2/authorize?client_id=809786297111543830&permissions=240518691904&scope=bot)`)
                  .setColor("#f55185")
                    .setAuthor(
                      "Maruchi Hentai #3841",
                      "https://maruchihentai.ga/wp-content/uploads/2020/08/Maruchi-hentai.png",)
                      .setFooter(
                        "Powered by Koneko Fansub",
                        "http://ekladata.com/mn4Y7yTW38eQaFVYSmwxByXRDPU@150x180.png"
                      )
        message.channel.send(embed)}}

 
