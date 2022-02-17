const Discord = require("discord.js");
module.exports =
 {

    name: "say",
	help: prefix => `Lists all active feeds for this channel. Usage: \`${prefix}say\``,
	admin: true,
	invoke: async (args, message, bot) =>{
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("STOP TU N'AS PAS LES PERMISSIONS REQUISES POUR UTILISER CETTE COMMANDE");
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage)}}

 
