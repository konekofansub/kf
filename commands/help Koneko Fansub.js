"use strict";

const Discord = require("discord.js");

module.exports =
{
	name: "help_6",
	help: prefix => `Shows help text. Usage: \`${prefix}help\``,
	admin: false,
	invoke: async (args,message, bot) =>{
		message.channel.send(
			  new Discord.MessageEmbed()
				.setTitle("Commandes Koneko Fansub")
				.setDescription("• `search [Element]` : permet d'accéder directement à la fiche")
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
		