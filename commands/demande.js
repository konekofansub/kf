const Discord = require("discord.js");


module.exports = {
    name: 'dmd',
    async execute(client, message, args){

    let botmessage = args.join(" ");


    const embed = new Discord.MessageEmbed()

            .setDescription(`${botmessage}`)
              .setColor("#f01fa3")
                .setAuthor(
                  "Koneko Toujou#3793",
                  "https://media.discordapp.net/attachments/812446026237607998/861591182168293376/930eaa35b7e9f6fe0c95a5c2fdce84d7.png?width=540&height=540",)
                  .setFooter(
                    "Powered by Koneko Fansub",
                    "http://ekladata.com/mn4Y7yTW38eQaFVYSmwxByXRDPU@150x180.png"
                  )
                  .setTitle("Règlement du serveur !")
              .setThumbnail()
              message.delete().catch();
              message.channel.send(embed);         
}}