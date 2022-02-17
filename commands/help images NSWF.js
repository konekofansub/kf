"use strict";

const Discord = require("discord.js");

module.exports =
{
	name: "help_4",
	help: prefix => `Shows help text. Usage: \`${prefix}help\``,
	admin: false,
	invoke: async (args,message, bot) =>{
		message.channel.send(
			  new Discord.MessageEmbed()
				.setTitle("Commandes Images")
				.setDescription("__**Image SWF\n**__• `sb [tag ou non]` : Génère une image aléatoire du tag sur Safebooru\n\n__**Image NSWF**__\n• `gb [tag ou non]` : Génère une image aléatoire du tag sur Gelbooru\n• `kc [tag ou non]` : Génère une image aléatoire du tag sur Konachan\n• `r34 [tag ou non]` : Génère une image aléatoire du tag sur Rules34\n• `yd [tag ou non]` : Génère une image aléatoire du tag Yande.re\n\n• `anal` : Donne un gif anal aléatoire ou une image.\n• `blowjob` : Donne un gif blowjob aléatoire ou une image.\n• `boobs` : Donne un gif boobs aléatoire ou une image.\n• `cumsluts` : Donne un gif cumsluts aléatoire ou une image.\n• `feet` : Donne un gif feet aléatoire ou une image.\n• `femdom` : Donne un gif fembdom aléatoire ou une image.\n• `futa` : Donne un gif futanari aléatoire ou une image.\n• `hentai` : Donne un gif hentai aléatoire ou une image.\n• `hneko` : Donne un gif neko aléatoire ou une image.\n• `kitsune` : Donne un gif kitsune aléatoire ou une image.\n• `kuni` : Donne un gif kuni aléatoire ou une image.\n• `pussy` : Donne un gif pussy aléatoire ou une image.\n• `tits` : Donne un gif tits aléatoire ou une image.\n• `trap` : Donne un gif trap aléatoire ou une image.\n• `yuri`: Donne un gif yuri aléatoire ou une image.")
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
		