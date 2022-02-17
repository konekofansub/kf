const Discord = require("discord.js");

module.exports = {
  execute(client, message) { 
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("Commandes Images NSFW")
        .setDescription("• `gb [tag ou non]` : Génère une image aléatoire du tag sélectionné \n• `anal` : Donne un gif anal aléatoire ou une image.\n• `blowjob` : Donne un gif blowjob aléatoire ou une image.\n• `boobs` : Donne un gif boobs aléatoire ou une image.\n• `cumsluts` : Donne un gif cumsluts aléatoire ou une image.\n• `feet` : Donne un gif feet aléatoire ou une image.\n• `femdom` : Donne un gif fembdom aléatoire ou une image.\n• `futa` : Donne un gif futanari aléatoire ou une image.\n• `hentai` : Donne un gif hentai aléatoire ou une image.\n• `hneko` : Donne un gif neko aléatoire ou une image.\n• `kitsune` : Donne un gif kitsune aléatoire ou une image.\n• `kuni` : Donne un gif kuni aléatoire ou une image.\n• `pussy` : Donne un gif pussy aléatoire ou une image.\n• `tits` : Donne un gif tits aléatoire ou une image.\n• `trap` : Donne un gif trap aléatoire ou une image.\n• `yuri`: Donne un gif yuri aléatoire ou une image.")
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
  name: "help_5",
};
