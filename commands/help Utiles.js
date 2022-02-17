"use strict";

const Discord = require("discord.js");

module.exports =
{
	name: "help_2",
	help: prefix => `Shows help text. Usage: \`${prefix}help\``,
	admin: false,
	invoke: async (args,message, bot) =>{
		message.channel.send(
			  new Discord.MessageEmbed()
				.setTitle("Commandes Utiles")
				.setDescription("• `server` : Donne le nombre de personnes sur le serveur\n• `add [role]` : Ajouter un role\n• `delete [role]` : Enlever un role\n• `avatar` : Donne ton avatar\n• `avatar [@membre]` : Donne l'avatar du membre ping")
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
		