module.exports = {
    name: "delete",
   description: "enlève d'un role",
    execute(client, message, args) {
      let role = message.guild.roles.cache.find(r => r.name === args.toString());
      if (role) {
          if (!message.member.roles.cache.has(role.id)) return message.channel.send("Vous n'avez pas ce role");
          
        
        message.member.roles.remove(role)
        .then(m => message.channel.send(`Vous ne le possédez plus ce rôle.`))
        .catch(e => console.log(e));
        
      } else {
          message.channel.send("Le role n'existe pas");
      }
   
    }
  }
  