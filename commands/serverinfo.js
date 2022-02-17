module.exports =
{
	name: "server",
	help: prefix => `Adds a feed to this channel. Usage: \`${prefix}add url\``,
	admin: false,
	invoke: async (bot, message, args) =>{ message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("Serveur Info")
          .setColor("RANDOM")
          .addField("**Nom du serveur : **", `${message.guild.name}`, true)
          .addField("**Membres :**", `${message.guild.memberCount}`, true)
         
          
          .setThumbnail(
            "https://cdn.discordapp.com/icons/587936849213784074/22ea02050fecb9aedee343fd6d534dd3.png"
          
          )
          .setAuthor(
            "Koneko Toujou",
            "https://konekofansub.gq/wp-content/uploads/2021/10/206ccfd530548da188c69bebca21d41b.png",)
  
          
          
          .setFooter(
            "Powered by Koneko Fansub",
            "https://konekofansub.gq/wp-content/uploads/2021/10/2905f2334c6fea514aa9daf2a0dd11db.png"
          )
          
    
      );
    },
}