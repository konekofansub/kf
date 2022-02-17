const { MessageEmbed } = require("discord.js");
const { formatDate } = require("../functions");
module.exports =
{
	name: "avatar",
	help: prefix => `Adds a feed to this channel. Usage: \`${prefix}add url\``,
	admin: false,
	invoke: async (args, message,bot) => { 
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
          Embed.setFooter(
            "Powered by Koneko Fansub",
            "https://konekofansub.gq/wp-content/uploads/2021/10/2905f2334c6fea514aa9daf2a0dd11db.png"
          )
          return message.channel.send(Embed);
        } else {
          const member = message.mentions.members.first();
          const user = bot.discord.users.cache.get(member.id)
          member.roles.cache.forEach((role) => {
            roles.push(role.name);
          });
          Embed.setTitle(`${user.tag}'s avatar!`);
          Embed.setImage(user.displayAvatarURL({ format: "png", size: 4096 }));
          Embed.setColor(`RANDOM`);
          Embed.setDescription(
            `Rejoint le : ${formatDate(member.joinedAt)}\nID: ${
              member.id
            }\nRoles: ${roles}`
          );
          Embed.setFooter(
            "Powered by Koneko Fansub",
            "https://konekofansub.gq/wp-content/uploads/2021/10/2905f2334c6fea514aa9daf2a0dd11db.png"
          )
          return message.channel.send(Embed);
        }
      },
    };