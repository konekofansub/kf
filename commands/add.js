"use strict";

const Discord = require("discord.js");

module.exports =
{
	name: "rss",
	help: prefix => `Adds a feed to this channel. Usage: \`${prefix}add url\``,
	admin: true,
	invoke: async (args, message, bot) =>

	{		if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("STOP TU N'AS PAS LES PERMISSIONS REQUISES POUR UTILISER CETTE COMMANDE");

		if (args.length < 1)
		{
			await bot.commands.get("help").invoke(["add"], message, bot);
			return;
		}

		const result = await bot.rss.add(args[0], message.channel.id);
		if (!result)
		{
			await message.channel.send("That feed already exists.");
		}
		else
		{
			await message.channel.send(`Feed added: **${Discord.Util.escapeMarkdown(result.title)}**`);
		}
	}
};
