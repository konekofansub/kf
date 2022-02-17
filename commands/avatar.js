const { MessageEmbed } = require("discord.js");
const { formatDate } = require("../functions");
module.exports = {
  name: "avatar",
  description: "Get your own or someone else's avatar",
  usage: "[user mention]",
  category: "fun",
   async execute(client, message, args) {
    let Embed = new MessageEmbed();
    let roles = [];
    if (!message.mentions.users.first()) {
      message.member.roles.cache.forEach((role) => {
        roles.push(role.name);
      });
      Embed.setTitle(`Your avatar!`);
      Embed.setImage(message.author.displayAvatarURL({ format: "png", size: 4096 }));
      Embed.setColor(`RANDOM`);
      Embed.setDescription(
        `Rejoint le ${formatDate(message.member.joinedAt)}\nID: ${
          message.author.id
        }\nRoles: ${roles}`
      );
      return message.channel.send(Embed);
    } else {
      let User = message.mentions.members.first();
      User.roles.cache.forEach((role) => {
        roles.push(role.name);
      });
      Embed.setTitle(`${client.users.cache.get(User.id).tag}'s avatar!`);
      Embed.setImage(client.users.cache.get(User.id).displayAvatarURL({ format: "png", size: 4096 }));
      Embed.setColor(`RANDOM`);
      Embed.setDescription(
        `Rejoint le : ${formatDate(User.joinedAt)}\nID: ${
          User.id
        }\nRoles: ${roles}`
      );
      return message.channel.send(Embed);
    }
  },
};