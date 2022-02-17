"use strict";

const Discord = require("discord.js");

module.exports =
{
	name: "help_1",
	help: prefix => `Shows help text. Usage: \`${prefix}help\``,
	admin: false,
	invoke: async (args,message, bot) =>{
		message.channel.send(
			  new Discord.MessageEmbed()
				.setTitle("Commandes Modération")
				.setDescription("• `ban [raison]` : permet de bannir à tout jamais\n• `clear` : permet de supprimer des messages (entre 1 et 99)\n• `kick` : fait partir une personne (peut revenir)\n• `say [phrase(s)]` : Dit la phrase à votre place")
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
		