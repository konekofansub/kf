const Discord = require("discord.js");

module.exports =
{
	name: "add",
	help: prefix => `Adds a feed to this channel. Usage: \`${prefix}add url\``,
	admin: false,
	invoke: async (args, message, bot) => {
		let role = message.guild.roles.cache.find(r => r.name === args.toString());
		if (role) {
			if (message.member.roles.cache.has(role.id)) return message.delete()
			.then(m => message.channel.send(`Tu as déjà le rôle`))
		 	.then(sent => sent.delete({ timeout: 5e3 }));
			if (role.permissions.has('KICK_MEMBERS')) return message.delete()
			.then(m => message.channel.send(`Tu ne peux pas avoir ce rôle`))
		 	.then(sent => sent.delete({ timeout: 5e3 }));
		  
		  
			
		  
		  message.member.roles.add(role)
		  .then(m => message.channel.send(`Tu as désormais le rôle`))
		  .then(sent => sent.delete({ timeout: 5e3 }))
		  .catch(e => console.log(e));
		  message.delete();
		  
		} else { message.delete()
			.then(m => message.channel.send(`Le rôle n'existe pas`))
			.then(sent => sent.delete({ timeout: 5e3 }));


		}
	  }
	  
	}
	