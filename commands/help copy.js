"use strict";

const Discord = require("discord.js");

module.exports =
{
	name: "help",
	help: prefix => `Shows help text. Usage: \`${prefix}help\``,
	admin: false,
	invoke: async (args,message, bot) =>{
		message.channel.send(
			  new Discord.MessageEmbed()
				.setTitle("Help")
				.setDescription("Préfixe : `kf!`\n*sans espace entre le préfix et la commande*\n\n**Information Help**\nUtilisez `kf!help_numéro de la catégorie` pour les détails.\nExemple : `kf!help_3`\n\n**Liste des catégories**\n\n1 : Modération\n2 : Utiles\n3 : Actions\n4 : Images SWF-NSFW\n5 : Source Images\n6 : Koneko Fansub")
				.setColor("#f55185")
		  
				.setAuthor(
				  "Koneko Toujou",
				  "https://konekofansub.gq/wp-content/uploads/2021/10/206ccfd530548da188c69bebca21d41b.png",)
		
				
				
				.setFooter(
				  "Powered by Koneko Fansub",
				  "https://konekofansub.gq/wp-content/uploads/2021/10/2905f2334c6fea514aa9daf2a0dd11db.png"
				)
				
		  
			);
		  },
		};
		