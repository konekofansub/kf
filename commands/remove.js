"use strict";

const Discord = require("discord.js");

module.exports =
{
	name: "remove",
	help: prefix => `Removes a feed from this channel. Usage: \`${prefix}remove url\``,
	admin: false,
	invoke: async (args, message, bot) =>
	{
		let role = message.guild.roles.cache.find(r => r.name === args.toString());
		if (role) {
			if (!message.member.roles.cache.has(role.id)) return message.delete()
			.then(m => message.channel.send(`Tu n'as pas le rôle`))
			.then(sent => sent.delete({ timeout: 5e3 }))
			.catch(e => console.log(e));

			
		  
		  message.member.roles.remove(role)
		  .then(m => message.channel.send(`Le rôle a été retiré avec succès.`))
		  .then(sent => sent.delete({ timeout: 5e3 }))
		  .catch(e => console.log(e));
		  message.delete();

		} else { message.delete()
			.then(m => message.channel.send(`Le role n'existe pas.`))
		  	.then(sent => sent.delete({ timeout: 5e3 }))
			  .catch(e => console.log(e));

		}
	 
	  }
	}