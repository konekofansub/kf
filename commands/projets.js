const Discord = require("discord.js");

module.exports = {
  execute(client, message) { 
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("Projets en cours <:choupi:790242996800323604> ")
        .setDescription("__**ANIMES**__\n**Hebdomadaire**\n- Godzillia Singular Point 02..................................en QCheck\n- Show by Rock!! Stars!! & Short!! 2 10 ............................En QCheck\nAlice in Deadly School............................ en trad (9%)  \n**Hors Saison**\n- Asatir : Mirai no Mukashibanashi 12/13........................... Check 20%\n- Girl und Panzer OAV....................................................... Check 10%\n- Pandora to Akubi.............................................................. Check 5%\n- Nande Koko ni Sensei Ga ?! 06 .................................... Re-adat 0%\n\n__**Hentai :underage: **__\n**Saisonniers**\n- White Blue 02 ........................................... en check\n- Haitoku no Kyoukai 01 ............................ en trad\n- First Love 02 .............................................. Check (50%)\nHagimete no Orusuban.............................................. Check\nTooi Kimi ni, Boku wa Todokanai 01............................ en check\n**Vintage**\nAi Doll 01/02/03/04.............................................. 01 : Check 15% 02/03/04 en Trad\nBlue Fox.............................................. Check 40%\n__**Hentai Remaster**__\nIntégralisté des Maki-chan to Nau")
        .setColor("RANDOM")
  
        .setAuthor(
          "Koneko Toujou#3793",
          "https://images-ext-2.discordapp.net/external/iZTtw-7xAJckmib3hOzdzv1q5iRAMGIgmjl0BWRSMP4/https/cdn.discordapp.com/avatars/810490720736641075/c459726c2b19bb5e16b41b697d380d96.webp",        )

        
        .setThumbnail(
          "https://cdn.discordapp.com/icons/587936849213784074/22ea02050fecb9aedee343fd6d534dd3.png"
        )
        .setFooter(
          "Dernière maj : 25/04/2021\nPowered by Koneko Fansub",
          "http://ekladata.com/mn4Y7yTW38eQaFVYSmwxByXRDPU@150x180.png"
        )
        
  
    );
  },
  name: "projets",
};
