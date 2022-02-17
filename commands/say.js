const Discord = require("discord.js");
module.exports =
 {
name: "say",
   description: "fait le blabla",
 
async execute(client, message, args) {
      
 
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("STOP TU N'AS PAS LES PERMISSIONS REQUISES POUR UTILISER CETTE COMMANDE");
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage)
 
}
 }