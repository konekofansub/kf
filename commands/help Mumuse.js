const Discord = require("discord.js");

module.exports = {
  execute(client, message) { 
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("Commandes Mumuse")
        .setDescription("• `baka` : <:baka:722925781713420371>\n• `sexe` : <:baise:790242995865255957>\n• `bjr` : Salut ! <:emoji_46:804282907086290947>\n• `ping` : ping/pong")
        .setColor("#f55185        ")
  
        .setAuthor(
          "Koneko Toujou#3793",
          "https://images-ext-2.discordapp.net/external/iZTtw-7xAJckmib3hOzdzv1q5iRAMGIgmjl0BWRSMP4/https/cdn.discordapp.com/avatars/810490720736641075/c459726c2b19bb5e16b41b697d380d96.webp",        )

        
        .setThumbnail(
          "https://cdn.discordapp.com/icons/587936849213784074/22ea02050fecb9aedee343fd6d534dd3.png"
        )
        .setFooter(
          "Powered by Koneko Fansub",
          "http://ekladata.com/mn4Y7yTW38eQaFVYSmwxByXRDPU@150x180.png"
        )
        
  
    );
  },
  name: "help_2",
};
